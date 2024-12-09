const PORT = 3001;

const mongoose = require("mongoose");
const express = require("express");

const usersRouter = require("./routes/users");

const app = express();

app.use(require("morgan")("dev"));

app.use("/users", usersRouter);

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
