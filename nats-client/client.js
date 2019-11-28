var NATS = require('nats');
var nats = NATS.connect({
  port: 4222,
  user: 'nats_user',
  pass: 'asdf1234',
});

// Simple Publisher
nats.publish('foo', 'Hello World!');

// Simple Subscriber
nats.subscribe('foo', function(msg) {
  console.log('Received a message: ' + msg);
});