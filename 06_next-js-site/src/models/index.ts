import { Model, Sequelize } from 'sequelize';
import { config } from '../utils/config';

export const sequelize = new Sequelize({
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true
    }
  },
  database: config.get('db.database'),
  host: config.get('db.host'),
  username: config.get('db.username'),
  password: config.get('db.password')
});

export class Produto extends Model {
  public OS!: string;
  public ds_Cliente: string;
}

Produto.init(
  { OS: { type: 'varchar', primaryKey: true }, ds_Cliente: 'varchar' },
  { timestamps: false, sequelize, tableName: 'FormEntrada_CadastroOS' }
);
