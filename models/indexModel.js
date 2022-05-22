const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mvcprobando", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const Article = require("./articleModel")(sequelize, Model, DataTypes);
const User = require("./userModel")(sequelize, Model, DataTypes);
const Comment = require("./commentModel")(sequelize, Model, DataTypes);

Article.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Article, { foreignKey: "userId" });

Comment.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Comment, { foreignKey: "userId" });

Comment.belongsTo(Article, { foreignKey: "articleId" });
Article.hasMany(Comment, { foreignKey: "articleId" });

/* const UserSeeder = require("../seeders/userSeeder")(User); */
sequelize.sync({ alter: true });
console.log("tablas creadas");
module.exports = { sequelize, Article, User, Comment };

/* a continuacion se comprueba la conexion a la database */
/* sequelize
  .authenticate()
  .then((error) => {
    console.log("se ha conectado a la database");
  })
  .catch((error) => {
    console.log(error);
  }); */
