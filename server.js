const express = require('express')
const bodyParser = require('body-parser')
const stronglyTyped = require('strongly-typed')

const todoType = stronglyTyped({
  id:'string',
  title:'string'
})

const app = express()

var idSeed=0
const data = {}

function addTodo(todo) {
  const newId = 't'+(idSeed++)
  todo.id=newId
  data[newId] = todoType(todo)
  return data[newId]
}

addTodo({title:'implement rendering from backend'})
addTodo({title:'implement adding new by sending a POST request'})

app.get('/api/todo',(req,res)=>{
  res.json(Object.keys(data).map(id=>data[id]))
})

app.get('/api/todo/:id',(req,res)=>{
  const id = req.params.id
  if(data[id]){
    res.json(data[id])
  } else {
    res.status(404).send("Not found, coś pomieszałeś")
  }
})
app.delete('/api/todo/:id',(req,res)=>{
  const id = req.params.id
  if(data[id]){
    delete data[id] //this is bad and shouldn't be done that way. delete is evil
    res.status(204).send()
  } else {
    res.status(404).send("Not found, coś pomieszałeś")
  }
})

app.use('/api/todo', bodyParser.json())
app.post('/api/todo', (req,res)=>{
  if(!req.body) {
    res.status(400).send('Nie ma body albo nie zgadza się content type. Miałeś wysłać JSONa zgodnego z typem todo')
  }
  const todo = addTodo(req.body)
  res.json(todo)
})

app.use(express.static('./'))

app.listen(8080, _=>{
  console.log('http://localhost:8080/')
})
