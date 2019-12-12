FROM golang:1.12.3 as builder

WORKDIR /app

COPY . .

RUN go mod download

RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 make build -ldflags="-w -s" -o main

RUN rm -f ~/.gitconfig

# multi-stage build to reduce final image size
FROM alpine:3.9.3

# need this line to fix the error
# Post https://api.sendgrid.com/v3/mail/send: x509: certificate signed by unknown authority
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
WORKDIR /app

COPY --from=builder /app/main main

ENTRYPOINT ["./main"]