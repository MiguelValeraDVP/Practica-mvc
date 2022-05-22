const { Article, Comment, User } = require("../models/indexModel");

module.exports = {
  /* 💪🏼🪟 trae todos los articulos y los comentarios */
  home: async function (req, res) {
    const articles = await Article.findAll();
    const comments = await Comment.findAll();
    res.render("home", { articles, comments });
  },
  /* 💪🏼🪟 trae el articulo a traves del parametro y todos sus comentarios */
  articleId: async (req, res) => {
    const article = await Article.findByPk(req.params.id);
    const comments = await Comment.findAll({
      where: {
        articleId: req.params.id,
      },
    });
    res.render("articleSelected", { article, comments });
  },
  /* 💪🏼🪟formulario signUp */
  signUpForm: function (req, res) {
    res.render("signUp");
  },
  /*💪🏼 agregar un nuevo user a la database */ 
  addUser: async function (req, res) {
    const createUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      creationDate: Date.now(),
    });
    console.log("creado con exito");
    res.redirect("/admin");
  },
  /* 😶‍🌫️🪟 */
  login: (req, res) => {
    res.render("login");
  },
  /* 😶‍🌫️💩
  loggedIn: async function (req,res){
    const checkUser = await User.findByPk()
  }, */

  /* le permite crear un comentario */
  /* 😶‍🌫️💪🏼💩 */
  createComment: async (req, res) => {
    const create = await Comment.create({
      content: req.body.content,
      creationDate: Date.now(),
      articleId: req.params.id,
      userId: Math.floor(Math.random() * 5 + 1),
    });

    res.redirect(`/articleSelected/${req.params.id}`);
  },
};
