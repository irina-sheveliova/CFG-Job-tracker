export default (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        UID: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return User;
};