import conexao from "./conexao.js"

export async function listarTiposVeiculo() {
    let sql = 
    `select id_tipo_veiculo id,
            ds_tipo_veiculo descricao
       from tb_tipos_veiculo
    `

    let [dados] = await conexao.query(sql);

    return dados;
}