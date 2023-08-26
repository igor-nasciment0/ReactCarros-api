import { Router } from "express";
import { inserirCliente } from "../repository/clientesRepository.js";

let endpoints = Router();

endpoints.post('/cliente', async (req, resp) => {
    let newCliente = req.body;
    
    let dados = await inserirCliente(newCliente);

    resp.send(dados);
})

export default endpoints;