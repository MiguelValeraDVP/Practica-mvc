const { Article, Comment } = require("../models/indexModel");
module.exports = {
  /*💪🏼 todos los articulos y los comentarios */
  homeAdmin: async (req, res) => {
    const articles = await Article.findAll();
    const comments = await Comment.findAll();
    res.render("adminView", { articles, comments });
  },

  /*💪🏼 get crear un articulo */
  createArticle: (req, res) => {
    res.render("createArticle");
  },
  /*❓❓❓ crear en la database*/
  createdArticle: async (req, res) => {
    const newArticle = await Article.create({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      author: req.body.author,
      creationDate: Date.now(),
    });
    console.log(newArticle);
    res.redirect("/admin");
  },
  /* 💪🏼 get actualizar articulo existente */
  updateArticle: (req, res) => {
    res.render("updateArticle");
  },
  /*❓❓❓ toma la informacion del form para actualizar por su id */
  updatedArticle: async (req, res) => {
    const updateArticle = await Article.findByPk(req.params.id);
    updateArticle.set({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      updateDate: Date.now(),
    });
    res.redirect("/admin");
  },
  /*💪🏼  */
  delete: async (req, res) => {
    const article = await Article.findOne({
      where: { id: [req.params.id] },
    });
    res.render("deleteArticle", { article });
  },

  /*❓❓❓  elimina el articulo a traves de su id */
  deletedArticle: async (req, res) => {
    await Article.destroy({
      where: { id: req.params.id },
    });
    res.redirect("/admin");
    console.log("eliminado");
  },
};
