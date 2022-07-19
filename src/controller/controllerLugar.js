import DatabaseMetodosLugar from "../DAO/DatabaseMetodosLugar.js";
import LugarModels from '../models/LugarModels.js';
import { ValidacoesLugares } from '../services/ValidacoesLugares.js';

export async function testApi(req, res){
    try {
        res.status(200).json({"Mensagem": "Tudo certo! Bora dar um rolé rs"})
    } catch (e) {
        res.status(400).json(e)
    }
};

export async function insertOne(req, res){
    try {
        if(ValidacoesLugares.notEmpty(req.body.nome_do_lugar && req.body.bairro && req.body.cidade && req.body.estado && req.body.pais && req.body.descricao && req.body.link) && ValidacoesLugares.validaCEP(req.body.cep)){
            const lugar = new LugarModels(...Object.values(req.body));
            const response = await DatabaseMetodosLugar.postLugar(lugar);
            res.status(201).json(response);
        } else {
            throw new Error("Ops! Verifique se digitou o CEP com apenas 8 numeros e/ou deixou algum outro campo em branco.")
        }
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
        if (ValidacoesLugares.notEmpty(req.body.nome_do_lugar && req.body.bairro && req.body.cidade && req.body.estado && req.body.pais && req.body.descricao && req.body.link) && ValidacoesLugares.validaCEP(req.body.cep)) {            
            const response = await DatabaseMetodosLugar.updateLugarById(req.body, req.params.id);
            res.status(200).json(response);
        } else {
            throw new Error("Ops! Verifique se digitou o CEP com apenas 8 numeros e/ou deixou algum outro campo em branco.")
        }
    } catch (e) {
        res.status(400).json(e.message);
    }
}