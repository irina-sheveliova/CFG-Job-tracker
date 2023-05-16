export default (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        UID: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });

    return User;
};