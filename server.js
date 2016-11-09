import express from 'express';
import path from 'path';

let app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(3000, () => console.log('Running on localhost:3000'));
