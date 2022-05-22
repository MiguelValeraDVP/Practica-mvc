const express = require("express");
const app = express();
const publicRoutes = require("./routes/publicRoutes");
const adminRoutes = require("./routes/adminRoutes");
const port = 3420;
/* const ignor = require("gitignore"); */
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/", publicRoutes);
app.use("/admin", adminRoutes);

app.listen(port, (req, res) => {
  console.log(`http://localhost:${port} || server running`);
});
