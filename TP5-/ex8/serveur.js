
// serveur.js
const http = require("http");

// Récupérer le port passé en argument ou utiliser 4000 par défaut
const port = process.argv[2] || 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Serveur sur le port ${port}`);
});

server.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
