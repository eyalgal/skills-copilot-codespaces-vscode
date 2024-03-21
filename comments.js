// Create web server
// Create a web server that listens on port 8080. Upon receiving a request, the server responds with a message that includes the request method, the request URL, and the content type of the request.
// For example, if the server receives a request to the following URL:
// http://localhost:8080/
// Then the server should respond with a message like this:
// Request received: GET /
// Content type: text/html
// If the server receives a request to the following URL:
// http://localhost:8080/api
// Then the server should respond with a message like this:
// Request received: GET /api
// Content type: application/json

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  if (req.url === '/api') {
    res.write('Content type: application/json');
  } else {
    res.write('Content type: text/html');
  }
  res.end();
});

server.listen(8080);
console.log('Server listening on port 8080');