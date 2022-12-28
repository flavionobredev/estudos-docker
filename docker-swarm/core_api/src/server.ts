import { createServer, RequestListener } from "http";

const handler: RequestListener = (request, response) => {
  response.writeHead(200);
  response.end(process.env.MESSAGE || "Hello World");
};

const server = createServer(handler);

server.listen(3001, () => console.log("listen on 3001"));
