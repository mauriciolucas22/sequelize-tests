/*
representação em codigo de cada tabela

Tabela: Usuarios
Model: Usuario
*/

module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('Peoples', {
    nome: DataTypes.STRING,
  });

  return People;
};
