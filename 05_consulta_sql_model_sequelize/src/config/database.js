module.exports = {
    dialect: 'mssql',
    host: 'plcmdb.database.windows.net',
    //VER DADOS DE CONEXÃO NO README.md
    define: {
        timestemps: false,
    },
    dialectOptions: {
        options: {
            encrypt: true,
        }
    }
};