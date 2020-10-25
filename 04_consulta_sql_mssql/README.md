
# Aplicação SQL SERVER

- Consulta ao SQL server AZURE
- Utilização da ejs engine (só configuração)
- Geração de API json em rota
- Geração de consulta (listagem) em 'html' ejs usando jquery. 
- Teste consulta com Tedious.


----- NodeJs confg------
npm init

npm install --save express
npm install --save body-parser
npm install --save nodemon     //npm install nodemon -g (Para instalar global)
npm install --save mssql
npm install --save ejs

após configurar o run dev
"scripts": {
    "server": "node src/server.js",  // "server": "cd src && node server.js",
    "dev": "nodemon src/server.js"   // "dev": "cd src && nodemon server.js"
},


### Conections

> MSSQL

const connStr = "Server=plcmdb.database.windows.net;Database=DATABASE;User Id=USER;Password=PASSWORD;encrypt=true;";


> TEDIOUS

//     server: 'localhost\\JONATHAN-CDSO\SQLEXPRESS',  //update me
//     authentication: {
//         type: 'default',
//         options: {
//             userName: 'USER', //update me
//             password: 'PASSWORD'  //update me
//         }