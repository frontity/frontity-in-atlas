const frontity = require("./build/server.js").default;
const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return frontity(req, res);
});
server.listen(8080);
console.log("Listening on port 8080");
