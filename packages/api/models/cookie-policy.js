const mongoose = require('mongoose');

const { Schema } = mongoose;

const CookiePolicySchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CookiePolicy', CookiePolicySchema);
