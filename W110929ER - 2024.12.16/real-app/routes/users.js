const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const router = express.Router();
const authMW = require("../middleware/auth");

const { User, validateUser } = require("../model/users");

let x = 5
x
5



router.get("/me", authMW, async (req, res) => {
  console.log(req.user);
  res.json(await User.findById(req.user._id, { password: 0 }));
});

router.post("/", async (req, res) => {
  // validate user input
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // validate system
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("User already registered.");
    return;
  }

  // process
  user = await new User(req.body);
  user.password = await bcrypt.hash(user.password, 12);

  await user.save();

  // response
  res.json(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
