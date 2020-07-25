import App from './app'
import http from 'http'

const port = 3000;

App.set('port', port);

const server = http.createServer(App);
server.listen(port);
server.on('listening', onListening);

function onListening() {
    console.log(`Listening on port: ${port}`);
}
