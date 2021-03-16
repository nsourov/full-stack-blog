const Privacy = require('../models/privacy');

exports.getPrivacy = async (req, res) => {
  const [privacy] = await Privacy.find({}).exec();
  if (!privacy)
    return res
      .status(404)
      .json({ success: false, errors: { message: 'Privacy not found' } });
  return res.status(200).json({ success: true, body: privacy.body });
};

exports.updatePrivacy = async (req, res) => {
  const [privacy] = await Privacy.find({}).exec();
  if (!privacy) {
    const newPrivacy = new Privacy(req.body);
    await newPrivacy.save();
    return res.status(200).json({ success: true, body: newPrivacy.body });
  } else {
    const updatedPrivacy = await Privacy.findByIdAndUpdate(privacy.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();
    return res.status(200).json({ success: true, body: updatedPrivacy.body });
  }
};
