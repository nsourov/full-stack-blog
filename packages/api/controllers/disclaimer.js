const Disclaimer = require('../models/disclaimer');

exports.getDisclaimer = async (req, res) => {
  const [disclaimer] = await Disclaimer.find({}).exec();
  if (!disclaimer)
    return res
      .status(404)
      .json({ success: false, errors: { message: 'Disclaimer not found' } });
  return res.status(200).json({ success: true, body: disclaimer.body });
};

exports.updateDisclaimer = async (req, res) => {
  const [disclaimer] = await Disclaimer.find({}).exec();
  if (!disclaimer) {
    const newDisclaimer = new Disclaimer(req.body);
    await newDisclaimer.save();
    return res.status(200).json({ success: true, body: newDisclaimer.body });
  } else {
    const updatedDisclaimer = await Disclaimer.findByIdAndUpdate(disclaimer.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();
    return res.status(200).json({ success: true, body: updatedDisclaimer.body });
  }
};
