import DatabaseMetodosLugar from "../DAO/DatabaseMetodosLugar.js";
import LugarModels from '../models/LugarModels.js';

export async function testApi(req, res){
    try {
        res.status(200).json({"Mensagem": "Tudo certo! Bora dar um rolé rs"})
    } catch (e) {
        res.status(400).json(e)
    }
};

export async function insertOne(req, res){
    try {
        const lugar = new LugarModels(...Object.values(req.body));
        const response = await DatabaseMetodosLugar.postLugar(lugar);
        res.status(201).json(response);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

export async function selectOne(req, res){
    try {
        const response = await DatabaseMetodosLugar.getLugarById(req.params.id);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.message)
    }
}

export async function selectAll(req, res){
    try {
        const response = await DatabaseMetodosLugar.getLugares();
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

export async function deleteOne(req, res){
    try {
        const response = await DatabaseMetodosLugar.deleteLugarById(req.params.id);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

export async function updateOne(req, res){
    try {
        const response = await DatabaseMetodosLugar.updateLugarById(req.body, req.params.id);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(e.message);
    }
}