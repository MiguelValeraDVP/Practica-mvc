const { Article, Comment, User } = require("../models/indexModel");
module.exports = {
  /*💪🏼 todos los articulos y los comentarios */
  homeAdmin: async (req, res) => {
    const articles = await Article.findAll();
    const comments = await Comment.findAll();
    res.render("adminView", { articles, comments });
  },
  
  /* get crear un articulo */
  createArticle: (req, res) => {
    res.render("createArticle");
  },
  /*  crear en la database*/
  createdArticle: async (req, res) => {
    const createArticle = await Article.create({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      creationDate: Date.now(),
    });
    res.redirect("/admin");
  },
  /* get actualizar articulo existente */
  updateArticle: (req, res) => {
    res.render("updateArticle");
  },
  /* toma la informacion del form para actualizar por su id */
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
  /* elimina el articulo a traves de su id */
  delete: (req, res) => {
    const deleteArticle = await.Article.findByPk(req.params.id);
    deleteArticle.destroy();
    res.redirect("/admin");
  },
};
