import { Router } from "express";
import { alterarCliente, deletarCliente, inserirCliente, listarClientes } from "../repository/clientesRepository.js";

let endpoints = Router();

endpoints.get('/cliente', async (req, resp) =>{
    try {
        let nome = req.query.nome;

        let clientes = await listarClientes(nome);

        resp.send(clientes);

    } catch (err) {
        resp.status(500).send(err.message)
    }    
})

endpoints.post('/cliente', async (req, resp) => {
    try {
        let newCliente = req.body;
    
        let dados = await inserirCliente(newCliente);

        resp.send(dados);  

    } catch (err) {
        resp.status(500).send(err.message)
    }
})

endpoints.put('/cliente/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let newCliente = req.body;

        let resposta = await alterarCliente(id, newCliente);

        if(resposta != 1)
            throw new Error("Não foi possível alterar o cliente");

        resp.status(204).send();

    } catch (err) {
        resp.status(500).send(err.message)
    }
})

endpoints.delete('/cliente/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let resposta = await deletarCliente(id);

        if(resposta != 1)
            throw new Error("Não foi possível deletar o cliente");

        resp.status(204).send();

    } catch (err) {
        resp.status(500).send(err.message);
    }
})

export default endpoints;