import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import DatabaseMetodosLugar from './src/DAO/DatabaseMetodosLugar.js';
import routerLugar from './src/routes/LugarRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

app.use(routerLugar);

DatabaseMetodosLugar.createTableLugar();