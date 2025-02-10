const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const morgan = require("morgan");
const app = express();
const port = 3000;

// for logs
app.use(morgan("combined"));

// config static file

app.use(express.static(path.join(__dirname, "public")));

// for template engine handlebars

app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
// app.set("views", "src/resources/views");
app.set("views", path.join(__dirname, "resources", "views"));

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
