import express from 'express';
import {createServer} from 'node:http';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const server = createServer(app);


app.get('/', (req, res) => {
    // res.send('<h1>Hello guys</h1>');
    res.sendFile(join(__dirname, 'index.html'));
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
})