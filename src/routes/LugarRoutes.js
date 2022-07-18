import { Router } from 'express';
import { testApi, insertOne, selectAll, deleteOne, updateOne, selectOne } from '../controller/controllerLugar.js';

const routerLugar = Router();

routerLugar.get('/', testApi);
routerLugar.post('/lugar', insertOne);
routerLugar.get('/lugar/:id', selectOne);
routerLugar.get('/lugares', selectAll);
routerLugar.delete('/lugar/:id', deleteOne);
routerLugar.put('/lugar/:id', updateOne);

export default routerLugar;