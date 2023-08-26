import conexao from "./conexao.js";

export async function inserirCliente(cliente) {
    let sql = 
    `
        insert into tb_clientes(nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
                        values(?, ?, ?, ?, ?) 
    `

    let [resposta] = await conexao.query(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh]);

    cliente.id = resposta.insertId;

    return cliente;
}

export async function listarClientes(nome) {
    let sql = 
    `
        select id_cliente       id,
               nm_cliente       nome,
               ds_email         email,
               ds_telefone      telefone,
               ds_cpf           cpf,
               ds_cnh           cnh
          from tb_clientes
         where nm_cliente       like ?
         order by				nome
    `

    let [dados] = await conexao.query(sql, [`%${nome}%`]);

    console.log(dados);

    return dados;
}

export async function alterarCliente(id, newCliente) {

    let sql = 
    `
        update tb_clientes
           set nm_cliente   = ?,
               ds_email     = ?,
               ds_telefone  = ?,
               ds_cpf       = ?,
               ds_cnh       = ?
         where id_cliente   = ?
    `

    let [resposta] = await conexao.query(sql, [newCliente.nome, newCliente.email, newCliente.telefone, newCliente.cpf, newCliente.cnh, id]);
    
    console.log(resposta);

    return resposta.affectedRows;
}

export async function deletarCliente(id) {
    let sql = 
    `
        delete from tb_clientes
         where id_cliente = ?
    `

    let [resposta] = await conexao.query(sql, [id]);

    return resposta.affectedRows;
}