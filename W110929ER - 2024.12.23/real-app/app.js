require("dotenv/config");

const PORT = 3005;

const mongoose = require("mongoose");
const express = require("express");

const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const cardsRouter = require("./routes/cards");

const app = express();

app.use(require("morgan")("dev"));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/cards", cardsRouter);

connect();

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/myRestAPI_W110929ER");

    console.log("connected to db");
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (e) {
    console.log("failed to connect to db", e.message);
  }
}
