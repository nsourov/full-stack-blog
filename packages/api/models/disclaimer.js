const mongoose = require('mongoose');

const { Schema } = mongoose;

const DisclaimerSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Disclaimer', DisclaimerSchema);
