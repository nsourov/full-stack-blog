const mongoose = require('mongoose');

const { Schema } = mongoose;

const AboutSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', AboutSchema);
