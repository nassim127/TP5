const http = require('http');

const serveur = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bonjour');
});

serveur.listen(9000, () => {
    console.log('Serveur démarré sur le port 8080');
});
