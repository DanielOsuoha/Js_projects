// import {Server} from "socket.io"
import express from 'express';
import {createServer} from 'node:http';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const app = express();
const server = createServer(app);
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res) => {
    // res.send('<h1>First server</h1>');
    res.sendFile(join(__dirname, 'index.html'))
});

server.listen(3000, ()=>{
    console.log('The app is running at http://localhost:3000');
});