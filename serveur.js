/*// Importation du module http
const http = require('http');
// Définition du port
const PORT = 3000;
// Création du serveur
const serveur = http.createServer((req, res) => { res.writeHead(200,
{ 'Content-Type': 'text/plain' });
res.end('Bonjour Depuis mon serveur Node.js '); });
// Écoute sur le port défini
serveur.listen(PORT, () => { console.log(`Serveur En écoute sur
http://localhost:${PORT}`); });

*/
const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => { res.writeHead(200,
{ "Content-Type": "text/plain" }); //http.createServer() prend uncallback (req, res) qui s’exécute à chaque requête.
res.end("Bonjour depuis Node.js (avec nodemon )");
//res.end() termine la réponse ; Toujours terminer une réponseavec res.end() pour éviter que le navigateur attende indéfiniment.
});
server.listen(PORT, () => { console.log(`Serveur en écoute sur
http://localhost:${PORT}`); });