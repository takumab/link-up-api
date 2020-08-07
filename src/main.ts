import App from "./app";
import http from "http";

const port = 3000;

App.set("port", port);

const server = http.createServer(App);

const onListening = () => console.log(`Listening on port: ${port}`);

server.listen(port);
server.on("listening", onListening);
