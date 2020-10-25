import convict from 'convict';
import dotenv from 'dotenv';

dotenv.config();

export const config = convict({
  db: {
    database: {
      doc: 'Database name',
      default: 'PLCM_CLIENTES', //'db.name',
      env: 'DB_DATABASE'
    },
    host: {
      doc: 'Database host',
      default: 'plcmdb.database.windows.net', //'db.example.com',
      env: 'DB_HOST'
    },
    username: {
      doc: 'Database authenticating username',
      default: 'adm_plcm', //'admin',
      sensitive: true,
      env: 'DB_USERNAME'
    },
    password: {
      doc: 'Database authenticating password',
      default: 'Sonda@2020', //'s3cret',
      sensitive: true,
      env: 'DB_PASSWORD'
    }
  }
});
