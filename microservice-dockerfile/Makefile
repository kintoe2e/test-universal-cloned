all: clean build

build: 
	go build  -o main main.go

clean:
	rm -f main

test:
	go test ./... -count=1

vet:
	go vet ./...

run:
	go run ./main

# https://github.com/cosmtrek/air
download-devtool:
	curl -fLo air https://raw.githubusercontent.com/cosmtrek/air/master/bin/darwin/air
	chmod +x air

# nodemon equivalent in GO
dev:
	./air
