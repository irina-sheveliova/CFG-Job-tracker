//  houses our job applications tables
// 'doa'stands for 'date of application'

export default (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    position: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    doa: {
      type: Sequelize.STRING,
    },
    salary: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    notes: {
      type: Sequelize.TEXT,
    },
    //   userId: {
    //     type: Sequelize.STRING, // Assuming userId is a string
    //     allowNull: false,
    //   },
  });

  return Job;
};
