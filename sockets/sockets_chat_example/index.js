import express from 'express';
import {createServer} from 'node:http';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {Server} from 'socket.io';

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const server = createServer(app);
const io = Server(server);


app.get('/', (req, res) => {
    // res.send('<h1>Hello guys</h1>');
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (server)=>{
    console.log('a user connected')
})

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
})