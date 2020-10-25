const { Model, DataTypes } = require('sequelize');
//const Sequelize = require('sequelize');

class Grupo extends Model {
    static init(connection){
        super.init({
            Grupo_Empresarial: { 
                field: 'Grupo Empresarial',
                type: DataTypes.STRING, 
                allowNull: false,
            },
            ds_Cliente: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            OS: {
                type: DataTypes.STRING,
                primaryKey: true,
                //autoIncrement: true,
                allowNull: false,
                unique: true,
            },
            ds_CNPJCliente:{
                type: DataTypes.STRING,
                allowNull: false,
            },  
        }, { 
            timestamps: false, 
            sequelize: connection,
            tableName: 'FormEntrada_CadastroOS'
        });
    }
}

module.exports = Grupo;



// const Sequelize = require('sequelize');
// const db = require('../database/index');

// const Grupo = db.define('grupo', {
//     idGrupo: { 
//         type: Sequelize.INTEGER, 
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//     },
//     grupo: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     os: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     cliente: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     cnpj:{
//         type: Sequelize.STRING,
//         allowNull: false,
//     },

// },  { timestamps: false })


// module.exports = Grupo;