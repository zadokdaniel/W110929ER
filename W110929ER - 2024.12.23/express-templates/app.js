const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", { name: "daniel" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
