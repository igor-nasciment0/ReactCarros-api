import { Router } from "express"
import conexao from "./conexao.js";

const endpoints = Router();

export async function listarVeiculos(descricao) {

    descricao = `%${descricao}%`;

    let sql = 
    `
      select id_veiculo			id,
			 ds_tipo			tipo,
			 ds_modelo			modelo,
			 ds_marca			marca,
			 ds_ano				ano,
			 ds_placa			placa
		from tb_veiculos

  inner join tb_tipos_veiculo
		  on tb_veiculos.id_tipo = tb_tipos_veiculo.id_tipo	

	   where ds_modelo			like ?
		   or ds_marca			like ?
		   or ds_placa			like ?
    `

    let [veiculos] = await conexao.query(sql, [descricao, descricao, descricao]);

    return veiculos;
}

export async function listarTipos() {
    let sql =
    `
        select id_tipo      idTipo,
               ds_tipo      descricao
          from tb_tipos_veiculo
    `

    let [tipos] = await conexao.query(sql);

    return tipos;
} 

export async function inserirVeiculo(veiculo) {
    let sql = 
    `
        insert into tb_veiculos(id_tipo, ds_modelo, ds_marca, ds_ano, ds_placa)
                         values(?, ?, ?, ?, ?);
    `

    let [resposta] = await conexao.query(sql, [veiculo.idTipo, veiculo.modelo, veiculo.marca, veiculo.ano, veiculo.placa]);

    veiculo.id = resposta.insertId;

    return veiculo;
}


export async function alterarVeiculo(id, newVeiculo) {

    let sql = 
    `
        update tb_veiculos
           set id_tipo      = ?,
               ds_modelo    = ?,
               ds_marca     = ?,
               ds_ano       = ?,
               ds_placa     = ?
         where id_veiculo   = ?
    `

    let [resposta] = await conexao.query(sql, [newVeiculo.idTipo, newVeiculo.modelo, newVeiculo.marca, newVeiculo.ano, newVeiculo.placa, id]);

    return resposta.affectedRows;
}

export async function deletarVeiculo(id) {
    let sql = 
    `
        delete from tb_veiculos
         where id_veiculo = ?
    `

    let [resposta] = await conexao.query(sql, [id]);

    return resposta.affectedRows;
}
