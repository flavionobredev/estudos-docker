const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from API");
});

server.listen(3000, () => {
  console.log("API listening on port 3000");
});
