import dotenv from 'dotenv';
import express from 'express';
import DatabaseMetodosLugar from './src/DAO/DatabaseMetodosLugar.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

DatabaseMetodosLugar.createTableLugar();