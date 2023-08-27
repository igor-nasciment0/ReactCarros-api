import { Router } from "express";
import { listarVeiculos, inserirVeiculo, listarTipos, alterarVeiculo, deletarVeiculo } from "../repository/veiculosRepository.js";

let endpoints = Router();

endpoints.get('/veiculo', async (req, resp) =>{
    try {
        let descricao = req.query.descricao;

        if(!descricao)
            descricao = "";

        let veiculos = await listarVeiculos(descricao);

        resp.send(veiculos);

    } catch (err) {
        resp.status(500).send(err.message)
    }    
})

endpoints.get('/veiculo/tipo', async (req, resp) => {
    try {
        let tipos = await listarTipos();

        resp.send(tipos);

    } catch (err) {
        resp.status(500).send(err.message)
    }    
})

endpoints.post('/veiculo', async (req, resp) => {
    try {
        let newVeiculo = req.body;
    
        let dados = await inserirVeiculo(newVeiculo);

        resp.send(dados);  

    } catch (err) {
        resp.status(500).send(err.message)
    }
})

endpoints.put('/veiculo/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let newVeiculo = req.body;

        let resposta = await alterarVeiculo(id, newVeiculo);

        if(resposta != 1)
            throw new Error("Não foi possível alterar o veículo");

        resp.status(204).send();

    } catch (err) {
        resp.status(500).send(err.message)
    }
})

endpoints.delete('/veiculo/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let resposta = await deletarVeiculo(id);

        if(resposta != 1)
            throw new Error("Não foi possível deletar o veículo");

        resp.status(204).send();

    } catch (err) {
        resp.status(500).send(err.message);
    }
})

export default endpoints;