select id_cliente       id,
	   nm_cliente       nome,
	   ds_email         email,
	   ds_telefone      telefone,
	   ds_cpf           cpf,
	   ds_cnh           cnh
  from tb_clientes
 where nm_cliente       like ?
 order by				nome;
 
insert into tb_clientes (nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
                 values (?, ?, ?, ?, ?)
 
update tb_clientes
   set nm_cliente   = ?,
	   ds_email     = ?,
	   ds_telefone  = ?,
	   ds_cpf       = ?,
	   ds_cnh       = ?
 where id_cliente   = ?


delete from tb_clientes
      where id_cliente = ?