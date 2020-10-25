# consulta_sql_model_sequelize

- sequelize para consulta sql
- Consulta ao SQL server AZURE
- Utilização da ejs engine (configuração e forEach)
- Geração de API json em rota
- Geração de consulta (listagem) em 'html' ejs. 


----- NodeJs confg------
npm init

npm install --save express
npm install --save body-parser
npm install --save nodemon     //npm install nodemon -g (Para instalar global)
npm install --save sequelize
npm install --save tedious
//npm install --save sequelize-cli
npm install --save ejs

após configurar o run dev
"scripts": {
    "server": "node src/server.js",  // "server": "cd src && node server.js",
    "dev": "nodemon src/server.js"   // "dev": "cd src && nodemon server.js"
},


# BANCO DE DADOS:
module.exports = {
    dialect: 'mssql',
    host: 'plcmdb.database.windows.net',
    username: '******',
    password: '******',
    database: '********',
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


