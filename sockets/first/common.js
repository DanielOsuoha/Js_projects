// import {Server} from "socket.io"
import express from 'express';
import {createServer} from 'node:http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>First server</h1>');
});

server.listen(3000, ()=>{
    console.log('The app is running at http://localhost:3000');
});