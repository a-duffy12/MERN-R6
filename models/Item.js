const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create the schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  side: {
    type: String,
    required: true
  },
  frag: {
    type: Number,
    required: true
  },
  destruction: {
    type: Number,
    required: true
  },
  disruption: {
    type: Number,
    required: true
  },
  counter: {
    type: Number,
    required: true
  },
  intel: {
    // only for defense side, so not all objects require it
    type: Number,
    required: false
  },
  hardBreach: {
    // only for attack side, so not all objects require it
    type: Number,
    required: false
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
