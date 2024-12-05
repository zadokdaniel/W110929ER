const path = require("node:path");

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const favorites = [];

app.use("/profile", (req, res, next) => {
  if (req.headers["x-token"] !== "12345") {
    res.status(401).json({
      erorr: {
        message: "you are not autherized",
      },
    });

    return;
  }

  next();
});

app.post("/profile/favorite", (req, res) => {
  const { name } = req.query;

  if (typeof name !== "string" || name.length < 2) {
    res.json({
      error: {
        message: "name must be string and at least 2 chars",
      },
    });
    return;
  }

  favorites.push(req.query.name);
  res.json({
    favorites,
  });
});

app.get("/profile/favorite", (req, res) => {
  res.json({
    favorites,
  });
});

app.get(["/", "/home"], (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/home.html"));
});

app.get("/info/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/about.html"));
});

app.get("/contact-us", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/contactUs.html"));
});

app.get("/a/b/c/styles.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/styles/style.css"));
});

app.all("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/pageNotFound.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
