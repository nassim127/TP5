  // serveur1.js
/* const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bonjour");
});

server.listen(8080, () => {
  console.log("Serveur démarré sur le port 8080");
});
*/
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Erreur serveur");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    }
  });
});

server.listen(8080, () => console.log("Serveur sur le port 8080"));
