import { sequelize } from '../../models';

export default async (req, res) => {
  const value = await sequelize.query('SELECT ds_CNPJCliente FROM "FormEntrada_CadastroOS"');
  res.status(200).json(value);
};
