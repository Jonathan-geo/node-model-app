import { sequelize } from '../../models';

export default async (req, res) => {
  const [zero] = await sequelize.query('SELECT [Grupo Empresarial] FROM "FormEntrada_CadastroOS"').catch(err => {
    console.log(err);
  });
  res.status(200).json([...zero]);
};
