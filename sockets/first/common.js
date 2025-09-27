import express from 'express';
import {createServer} from 'node:http';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {Server} from "socket.io"

const app = express();
const server = createServer(app);
const __dirname = dirname(fileURLToPath(import.meta.url))
const io = new Server(server)
app.get('/', (req, res) => {
    // res.send('<h1>First server</h1>');
    res.sendFile(join(__dirname, 'index.html'))
});

io.on('connection', (socket)=>{
    console.log('user connected')
    socket.on('chat message', (msg) =>{
        console.log('Message: ' + msg)
    })
});
server.listen(3000, ()=>{
    console.log('The app is running at http://localhost:3000');
});