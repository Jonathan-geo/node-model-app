
/*   FUNCINOU AZURE _ _ MSSQL    */


const databaseConfig = 'VER CONECT STRING NO README.md'
const sql = require("mssql");


//fazendo a conexão global
sql.connect(databaseConfig)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));




module.exports = databaseConfig;
