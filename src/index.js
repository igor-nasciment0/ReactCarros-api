import 'dotenv/config'
import express from "express";
import cors from "cors";
import clientesController from "./controller/clientesController.js";
import veiculosController from './controller/veiculosController.js';

const server = express();

server.use(cors());
server.use(express.json());
server.use(clientesController);
server.use(veiculosController);

server.listen(process.env.PORT, () => console.log("API ONLINE NA PORTA " + process.env.PORT));