const CookiePolicy = require('../models/cookie-policy');

exports.getCookiePolicy = async (req, res) => {
  const [cookiePolicy] = await CookiePolicy.find({}).exec();
  if (!cookiePolicy)
    return res
      .status(404)
      .json({ success: false, errors: { message: 'Cookie policy not found' } });
  return res.status(200).json({ success: true, body: cookiePolicy.body });
};

exports.updateCookiePolicy = async (req, res) => {
  const [cookiePolicy] = await CookiePolicy.find({}).exec();
  if (!cookiePolicy) {
    const newCookiePolicy = new CookiePolicy(req.body);
    await newCookiePolicy.save();
    return res.status(200).json({ success: true, body: newCookiePolicy.body });
  } else {
    const updatedCookiePolicy = await CookiePolicy.findByIdAndUpdate(cookiePolicy.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();
    return res.status(200).json({ success: true, body: updatedCookiePolicy.body });
  }
};
