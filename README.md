<h1>Node Model App</h1> 

<p align="center">
	<img src="https://img.shields.io/static/v1?label=JavaScript&message=EXPRESS&color=red&style=for-the-badge&logo=JAVASCRIPT"/>
	<img src="https://img.shields.io/static/v1?label=JavaScript&message=NODE&color=red&style=for-the-badge&logo=JAVASCRIPT"/>
	<img src="http://img.shields.io/static/v1?label=STATUS&message=PROJETO%20MODELO&color=green&style=for-the-badge"/>
</p>


## Descrição do projeto 

<p align="justify">
  Este é uma "coletânea" de mini projetos utilizando o nodejs. O objetivo é ter alguns códigos modelos de fácil acesso e reaplicação.
</p>

> Projetos:

<h5> 01_crudRest_simples </h5>

	- projeto node + express + jquery
	- CRUD simples (sem database)

<h5> 02_consultaSQLserver</h5>

	- projeto node + express + jquery + mssql
	- consulta sql server mssql
	- API listagem e busca(por meio de endereço em rotas)
	- select aninhado (jquery)

<h5>03_painel_api_covid-19</h5>

	- projeto node + express + jquery
	- repositório teste
	- site hospedado no heroku 
		- https://painel-covid.herokuapp.com/
		- https://painel-covid.herokuapp.com/api

<h5>04_consulta_sql_mssql</h5>

	- Consulta ao SQL server AZURE
	- Utilização da ejs engine (só configuração)
	- Geração de API json em rota
	- Geração de consulta (listagem) em 'html' ejs usando jquery. 
	- Teste consulta com Tedious.
	
<h5>05_consulta_sql_model_sequelize</h5>

	- sequelize para consulta sql
	- Consulta ao SQL server AZURE
	- Utilização da ejs engine (configuração e forEach)
	- Geração de API json em rota
	- Geração de consulta (listagem) em 'html' ejs.
	
	
<h5>06_next-js-site</h5>

	- react app
	- conexao com SQL server 
	- sequelize (model e raw)
	- typeScript
	

	
	
	
	
<h5>BANCO DE DADOS:</h5>
```javascript

module.exports = {
    dialect: 'mssql',
    host: 'plcmdb.database.windows.net',
    username: 'adm_plcm',
    password: '******',
    database: 'PLCM_CLIENTES',
    define: {
        timestemps: false,
    },
    dialectOptions: {
        options: {
            encrypt: true,
        }
    }
};


# TABELA 
SELECT TOP (1000) * FROM [dbo].[FormEntrada_CadastroOS]

Grupo Empresarial   ds_Cliente              ds_CNPJCliente      OS      dt_Inicio                       dt_Final
DU PONT DO BRASIL   DU PONT DO BRASIL S A   061064929000179     168091  2019-04-01T00:00:00.0000000     2020-03-31T00:00:00.0000000
DU PONT DO BRASIL   DU PONT DO BRASIL S A   061064929000179     168092  2019-04-01T00:00:00.0000000     2020-03-31T00:00:00.0000000

```


# LINKS

projeto node express modelo
https://github.com/gothinkster/node-express-realworld-example-app




























.
