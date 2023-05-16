//  houses our job applications tables
// 'doa'stands for 'date of application'

export default (sequelize, Sequelize) => {
    const Job = sequelize.define('job', {
        position: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        },
        doa: {
            type: Sequelize.STRING
        },
        salary: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        }
    });

    return Job;
};