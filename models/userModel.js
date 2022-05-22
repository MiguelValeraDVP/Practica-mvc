module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: { type: DataTypes.STRING },
      email: {
        type: DataTypes.STRING,
      },
        password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    creationDate: {
      type: DataTypes.DATE,
    },
    
    updateDate: {
      type: DataTypes.DATE,
      },
    },
    {
      sequelize /* coneccion con la DB */,
      modelName: "users" /*  */,
      timestamps: false,
    }
  );
  return User;
};
