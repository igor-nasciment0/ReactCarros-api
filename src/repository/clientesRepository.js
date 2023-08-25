import conexao from "./conexao.js";

export async function inserirCliente(cliente) {
    let sql = 
    `
        insert into tb_cliente(nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
                        values(?, ?, ?, ?, ?) 
    `

    let [resposta] = await conexao.query(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh]);

    cliente.id = resposta.insertId;

    return cliente;
}

export async function listarClientes() {
    let sql = 
    `
        select id_cliente       id,
               nm_cliente       nome,
               ds_email         email,
               ds_telefone      telefone,
               ds_cpf           cpf,
               ds_cnh           cnh
          from tb_clientes
    `

    let [dados] = await conexao.query(sql);

    return dados;
}

export async function listarClientesPorNome(nome) {
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
    `

    let [dados] = await conexao.query(sql, [`%${nome}%`]);

    return dados;
}