module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define('users',
        {
            username: DataTypes.STRING,
            password: DataTypes.STRING
        },
        {

        });
}