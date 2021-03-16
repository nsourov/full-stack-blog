const mongoose = require('mongoose');

const { Schema } = mongoose;

const PrivacySchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Privacy', PrivacySchema);
