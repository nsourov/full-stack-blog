const mongoose = require('mongoose');

const { Schema } = mongoose;

const TermsSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Terms', TermsSchema);
