-- REACT COM DB - LOCACAO DE CARROS

create database locacao_veiculos_db;

use locacao_veiculos_db;

create table tb_clientes
(
	id_cliente 		int primary key auto_increment,
    nm_cliente 		varchar(200) not null,
    ds_email		varchar(500) not null,
    ds_telefone 	varchar(30),
    ds_cpf			varchar(30),
    ds_cnh			varchar(30)
);

create table tb_tipos_veiculo
(
	id_tipo			int primary key auto_increment,
    ds_tipo			varchar(50)
);

create table tb_veiculos
(
	id_veiculo		int primary	key auto_increment,
    id_tipo			int not null,
    ds_modelo		varchar(200),
    ds_marca 		varchar(200),
    ds_ano			year,
    ds_placa		varchar(30),
	foreign key (id_tipo) references tb_tipos_veiculo(id_tipo)
)