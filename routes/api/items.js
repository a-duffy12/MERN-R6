const express = require("express");
const router = express.Router();

// import Item model
const Item = require("../../models/Item");

// @route GET api/items
// @desc Get all items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ name: 1 }) // sorts the items by name
    .sort({ side: 1 }) // and then by side
    .then(items => res.json(items)); // maps the items to a json
});

// @route POST api/items
// @desc Create an item
// @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    // add items to the router
    name: req.body.name,
    side: req.body.side,
    frag: req.body.frag,
    destruction: req.body.destruction,
    disruption: req.body.disruption,
    counter: req.body.counter,
    intel: req.body.intel,
    hardBreach: req.body.hardBreach
  });

  // displays the item (in a json) that is being savec in the database
  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// export the router so it can communicate with the rest of the code
module.exports = router;
