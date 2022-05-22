const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");

/*💪🏼 RENDER /ADMIN */
adminRouter.get("/", adminController.homeAdmin);

/* RENDER /ADMIN/CREATEARTICLE  */
adminRouter.get("/createArticle", adminController.createArticle);

/* REDIRECT /ADMIN */
adminRouter.post("/createArticle", adminController.createdArticle);

/* RENDER /ADMIN/UPLOADARTICLE  */
adminRouter.get("/updateArticle", adminController.updateArticle);

/* REDIRECT /ADMIN */
adminRouter.post("/updateArticle", adminController.updatedArticle);

/* RENDER /ADMIN/DELETEARTICLE  */
adminRouter.get("/", adminController.delete);

module.exports = adminRouter;
