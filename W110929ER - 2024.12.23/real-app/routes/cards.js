const express = require("express");

const router = express.Router();
const authMW = require("../middleware/auth");

const { validateCard, Card, generateBizNumber } = require("../model/cards");

router.get("/:id", authMW, async (req, res) => {
  const card = await Card.findOne({
    _id: req.params.id,
    user_id: req.user._id,
  });

  if (!card) {
    res.status(404).send("The card with the given ID was not found.");
    return;
  }

  res.send(card);
});
+
router.delete("/:id", authMW, async (req, res) => {
  const card = await Card.findOneAndDelete({
    _id: req.params.id,
    user_id: req.user._id,
  });

  if (!card) {
    res.status(404).send("The card with the given ID was not found.");
    return;
  }

  res.send(card);
});

router.put("/:id", authMW, async (req, res) => {
  // validate user's inputs
  const { error } = validateCard(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const card = await Card.findOneAndUpdate(
    {
      _id: req.params.id,
      user_id: req.user._id,
    },
    req.body,
    { returnDocument: "after" }
  );

  if (!card) {
    res.status(404).send("The card with the given ID was not found.");
    return;
  }

  res.send(card);
});

router.post("/", express.json(), authMW, async (req, res) => {
  // validate user's inputs
  const { error } = validateCard(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // validate system
  if (!req.user.biz) {
    res.status(400).send("User must be of type business to create a card");
    return;
  }

  // process
  const card = await new Card({
    ...req.body,
    bizImage:
      req.body.bizImage ??
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    user_id: req.user._id,
    bizNumber: await generateBizNumber(),
  }).save();

  // response
  res.json(card);
});

module.exports = router;