import Router from 'express';
import { listarTiposVeiculo } from '../repository/tiposRepository.js';

let endpoints = Router();

endpoints.get('/veiculo/tipo', async (req, resp) => {
    try {
        let resposta = await listarTiposVeiculo();
        resp.send(resposta);

    } catch (err) {
        resp.status(500).send(err.message)
    }
})

export default endpoints;