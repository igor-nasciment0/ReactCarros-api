import Router from 'express';
import { listarTiposVeiculo } from '../repository/tiposRepository';

let endpoints = Router();

endpoints.get('/tipos-veiculo', async (req, resp) => {
    try {
        let resposta = await listarTiposVeiculo();
        resp.send(resposta);

    } catch (err) {
        resp.status(500).send(err.message)
    }
})

export default endpoints;