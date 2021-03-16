const Terms = require('../models/terms');

exports.getTerms = async (req, res) => {
  const [terms] = await Terms.find({}).exec();
  if (!terms)
    return res
      .status(400)
      .json({ success: false, errors: { message: 'Terms not found' } });
  return res.status(200).json({ success: true, body: terms.body });
};

exports.updateTerms = async (req, res) => {
  const [terms] = await Terms.find({}).exec();
  if (!terms) {
    const newTerms = new Terms(req.body);
    await newTerms.save();
    return res.status(200).json({ success: true, body: newTerms.body });
  } else {
    const updatedTerms = await Terms.findByIdAndUpdate(terms.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();
    return res.status(200).json({ success: true, body: updatedTerms.body });
  }
};
