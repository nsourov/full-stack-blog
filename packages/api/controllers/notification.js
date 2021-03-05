const Notification = require('../models/notification');

exports.getNotifications = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 5;
  const skip = page * limit - limit;

  const notificationsPromise = Notification.find({})
    .populate('user', { name: 1, id: 1 })
    .populate('post', { title: 1, slug: 1 })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Notification.count({});

  const [notifications, count] = await Promise.all([
    notificationsPromise,
    countPromise,
  ]);
  const pages = Math.ceil(count / limit);
  if (!notifications.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }
  return res.status(200).json({
    success: true,
    notifications,
    page,
    pages,
    count,
  });
};

exports.unreadCount = async (req, res) => {
  const count = await Notification.count({ read: false });
  return res.status(200).json({
    success: true,
    count,
  });
};

exports.deleteNotifications = async (req, res) => {
  await Notification.remove({}).exec();
  return res.status(200).json({ success: true });
};

exports.markAsRead = async (req, res) => {
  const notification = await Notification.findByIdAndUpdate(
    req.params.notificationId,
    { read: true }
  ).exec();
  return res.status(200).json({ success: true, notification });
};
