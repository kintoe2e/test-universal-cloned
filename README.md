# Test Universal

## microservice

| Setting  |  Value  |
|---|---|---|---|---|
| Build Command | go build main.go  |
| Run Command  |  ./main |
| Port  |  8000 |
| SubFolder | microservice |
| Endpoints | GET /hello |
| | GET /headers|


## dynamic-website

| Setting  |  Value  |
|---|---|---|---|---|
| Build Command | go build main.go  |
| Run Command  |  ./main |
| Port  |  8000 |
| SubFolder | dynamic-website |
| Endpoints | GET /hello |
| | GET /headers|

## static-website

| Setting  |  Value  |
|---|---|---|---|---|
| Build Required | false  |
| Build Command | n/a  |
| SubFolder | static-website |
| Endpoints | GET /index.html |



## static-website-build

| Setting  |  Value  |
|---|---|---|---|---|
| Build Required | true  |
| Build Command | n/a  |
| SubFolder | static-website-build |
| BuildFolder | build |
| Endpoints |  |