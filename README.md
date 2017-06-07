# Server

```
npm install
npm start
```

 endpoint | opis
 --- | ---
 GET `/api/todo` | zwraca aktualną listę todo
 GET `/api/todo/:id` | zwraca jedno todo o podanym `:id`
 POST `/api/todo` | tworzy nowe todo, POST body musi być JSONem
 DELETE `/api/todo/:id` | usuwa todo o podanym `:id`

Zwracaj uwagę na statusy http
200 i 204 to udane, pozostałe nie. Wikipedia ma szczegóły.

### przykłady
Poprawne:
```bash
curl -v http://localhost:8080/api/todo
```
```bash
curl -v http://localhost:8080/api/todo/t1
```

```bash
curl -v http://localhost:8080/api/todo -d '{"title":"poop"}' -H 'content-type:application/json'
```

Złe:
```bash
curl -v http://localhost:8080/api/todo -d '{"title":"poop"}'
```
```bash
curl -v http://localhost:8080/api/todo -d 'tekst zamiast JSONa'
```
