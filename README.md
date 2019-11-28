# Test Universal

## microservice

| Setting  |  Value  |
|---|---|
| Port  |  8000 |
| Build Command | go build main.go  |
| Start Command  |  ./main |
| Language  |  Go 1.11.4 |
| SubFolder | microservice |
| Endpoints | GET /hello |
| | GET /headers|

## dynamic-website

| Setting  |  Value  |
|---|---|
| Port  |  8000 |
| Build Command | go build main.go  |
| Start Command  |  ./main |
| Language  |  Go 1.11.4 |
| SubFolder | dynamic-website |
| Endpoints | GET /hello |
| | GET /headers|

## static-website

| Setting  |  Value  |
|---|---|
| Build Required | false  |
| Build Command | n/a  |
| SubFolder | static-website |
| Endpoints | GET /index.html |

## static-website-build

| Setting  |  Value  |
|---|---|
| Build Required | true  |
| Language  |  Node |
| Build Command | npm install && npm run build  |
| Build Folder | build |
| SubFolder | static-website-build |
| Endpoints | GET /index.html |

### Build Args

| Key  |  Value  |
|---|---|
| USERNAME | `default:'nobody'` |

## helm

| Setting  |  Value  |
|---|---|
| SubFolder | helm |
| Endpoints |  |


## dockerfile

| Setting  |  Value  |
|---|---|
| Build Required | true  |
| Build Command | n/a  |
| SubFolder | static-website-build |
| BuildFolder | build |
| Endpoints |  |