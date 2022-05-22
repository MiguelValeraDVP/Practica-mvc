const express = require("express");
const publicController = require("../controllers/publicController");
const publicRoutes = express.Router();

/* render home */
publicRoutes.get("/", publicController.home);

/* render articleSelected/param */
publicRoutes.get("/article/:id", publicController.articleId);

/* redirect aticleSelected/:id*/
publicRoutes.post("/article/:id", publicController.createComment);

/* render SignUp */
publicRoutes.get("/signUp", publicController.signUpForm);

/* render admin / redirect signUp */
publicRoutes.post("/signUp", publicController.addUser);

publicRoutes.get("/login", publicController.login);

/* publicRoutes.post("/login", publicController.loggedIn); */

module.exports = publicRoutes;
