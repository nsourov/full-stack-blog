const About = require('../models/about');

exports.getAbout = async (req, res) => {
  const [about] = await About.find({}).exec();
  if (!about)
    return res
      .status(404)
      .json({ success: false, errors: { message: 'About not found' } });
  return res.status(200).json({ success: true, body: about.body });
};

exports.updateAbout = async (req, res) => {
  const [about] = await About.find({}).exec();
  if (!about) {
    const newAbout = new About(req.body);
    await newAbout.save();
    return res.status(200).json({ success: true, body: newAbout.body });
  } else {
    const updatedAbout = await About.findByIdAndUpdate(about.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();
    return res.status(200).json({ success: true, body: updatedAbout.body });
  }
};
