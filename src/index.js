import express from "express";
import cors from "cors";
import clientesController from "./controller/clientesController.js";

const server = express();

server.use(cors());
server.use(clientesController)

server.listen(process.env.PORT, () => console.log("API ONLINE NA PORTA " + process.env.PORT));