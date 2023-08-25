import mysql from 'mysql2/promise';

let dados = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DB
}


const conexao = mysql.createConnection(dados)

export default conexao;