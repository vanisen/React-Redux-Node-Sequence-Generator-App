# Jumpcut

## Dependencies

To get app up and running on local.

### Node

```bash
$ brew install node
```

### GIT

```bash
$ brew install git
```

## Installation

```bash
$ npm install
```

## Run

```bash
$ npm start
```

## Test

```bash
$ npm test
```

## Api

### Login

```cURL
curl -X POST \
  http://localhost:5000/api/authenticate \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"username": "test",
	"password": "test"
}'
```

### Initialized a sequencer

```cURL
curl -X POST \
  http://localhost:5000/api/generator/partialSumSeq \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU0Njg2NDg4NH0.vNmtxm_0O9ZchGSYYHSwFhM5jCeNlLqxdgUiJGymwB8' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"params": [1, 3, 7, 2, 0]
}'
```

### Generate next sequence

```cURL
curl -X GET \
  http://localhost:5000/api/generator/next \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU0Njg2NDg4NH0.vNmtxm_0O9ZchGSYYHSwFhM5jCeNlLqxdgUiJGymwB8' \
  -H 'cache-control: no-cache'
```

### Initialized a piped sequencer

```cURL
curl -X POST \
  http://localhost:5000/api/piped/partialSumSeq/isEven \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU0Njg2NDg4NH0.vNmtxm_0O9ZchGSYYHSwFhM5jCeNlLqxdgUiJGymwB8' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"params": [1, 3, 7, 2, 0]
}'
```

### Generate next piped sequence

```cURL
curl -X GET \
  http://localhost:5000/api/piped/next \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU0Njg2NDg4NH0.vNmtxm_0O9ZchGSYYHSwFhM5jCeNlLqxdgUiJGymwB8' \
  -H 'cache-control: no-cache'
```