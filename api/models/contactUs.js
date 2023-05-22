export default (sequelize, Sequelize) => {
  const Message = sequelize.define('message', {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    message: {
      type: Sequelize.TEXT,
    },
  });

  return Message;
};
