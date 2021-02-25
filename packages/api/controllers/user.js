const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const User = require('../models/user');
const Post = require('../models/post');
const Request = require('../models/request');
const Comment = require('../models/comment');

const multerOptions = {
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20mb
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    if (isPhoto) {
      next(null, true);
    } else {
      next({ message: "That filetype isn't allowed!" }, false);
    }
  },
};

exports.upload = multer(multerOptions).single('image');
exports.resize = async (req, res, next) => {
  // check if there is no new file to resize
  if (!req.file) {
    next(); // skip to the next middleware
    return;
  }
  const extension = req.file.mimetype.split('/')[1];
  req.body.image = `${uuid.v4()}.${extension}`;
  // now we resize
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, 800, jimp.AUTO);
  await photo.write(`./public/uploads/${req.body.image}`);
  let imageUrl;
  if (process.env.NODE_ENV === 'development') {
    imageUrl = `${process.env.SERVER_URL}/uploads/${req.body.image}`;
  } else {
    imageUrl = `${process.env.API_URL_PROD}/uploads/${req.body.image}`;
  }

  req.body.image = imageUrl;
  // once we have written the photo to our filesystem, keep going!
  next();
};

exports.getUsers = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 10;
  const skip = page * limit - limit;

  const usersPromise = User.find()
    .select(['-password'])
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = User.count();

  const [users, count] = await Promise.all([usersPromise, countPromise]);
  const pages = Math.ceil(count / limit);

  if (!users.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }

  return res.status(200).json({
    success: true,
    users,
    page,
    pages,
    count,
  });
};
exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.userId)
    .select(['-password'])
    .exec();
  if (!user)
    return res
      .status(400)
      .json({ success: false, errors: { message: 'User not found' } });
  return res.status(200).json({ success: true, user });
};

exports.getAdmin = async (req, res) => {
  const admin = await User.findOne({ role: 'admin' })
    .select(['name', 'bio', 'image', 'email', '-_id'])
    .exec();
  if (!admin)
    return res
      .status(400)
      .json({ success: false, errors: { message: 'Admin not found' } });
  return res.status(200).json({ success: true, admin });
};

exports.getUsersPublishedPosts = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 10;
  const skip = page * limit - limit;

  const postsPromise = Post.find({ published: true, user: req.params.userId })
    .select(['-comments'])
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count();

  const [posts, count] = await Promise.all([postsPromise, countPromise]);
  const pages = Math.ceil(count / limit);

  if (!posts.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }

  return res.status(200).json({
    success: true,
    posts,
    page,
    pages,
    count,
  });
};

exports.getUsersUnPublishedPosts = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 10;
  const skip = page * limit - limit;

  const postsPromise = Post.find({ published: false, user: req.params.userId })
    .select(['-comments'])
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count();

  const [posts, count] = await Promise.all([postsPromise, countPromise]);
  const pages = Math.ceil(count / limit);

  if (!posts.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }

  return res.status(200).json({
    success: true,
    posts,
    page,
    pages,
    count,
  });
};
exports.getUsersPublishedComments = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 10;
  const skip = page * limit - limit;

  const args = {
    post: req.params.postId,
    user: req.params.userId,
    published: true,
  };
  const commentsPromise = Comment.find(args)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Comment.count(args);

  const [comments, count] = await Promise.all([commentsPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!comments.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }
  return res.status(200).json({
    success: true,
    comments,
    page,
    pages,
    count,
  });
};

exports.getUsersUnPublishedComments = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 10;
  const skip = page * limit - limit;

  const args = {
    post: req.params.postId,
    user: req.params.userId,
    published: false,
  };
  const commentsPromise = Comment.find(args)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Comment.count(args);

  const [comments, count] = await Promise.all([commentsPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!comments.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }
  return res.status(200).json({
    success: true,
    comments,
    page,
    pages,
    count,
  });
};

exports.deleteUser = async (req, res) => {
  await Post.deleteMany({ user: req.params.userId }).exec();
  await Comment.deleteMany({ user: req.params.userId }).exec();
  await Request.deleteMany({ user: req.params.userId }).exec();
  await User.findOneAndDelete({ _id: req.params.userId }).exec();
  return res.status(200).json({ success: true });
};

exports.updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    { new: true, runValidators: true }
  ).select(['-password']);
  await Request.findOneAndRemove({ user: updatedUser.id });
  await User.findByIdAndUpdate(updatedUser.id, { editorRequested: false });
  return res.status(200).json({ success: true, user: updatedUser });
};

exports.updateProfile = async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }
  if (req.body.bio && req.body.bio.length > 200) {
    return res.status(400).json({
      success: false,
      errors: { message: 'Bio cannot be lore than 200 word' },
    });
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    { new: true, runValidators: true }
  ).select(['-password']);

  const token = jwt.sign(
    {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      bio: updatedUser.bio,
      image: updatedUser.image,
      editorRequested: updatedUser.editorRequested,
    },
    process.env.APP_SECRET
  );
  return res.status(200).json({ success: true, token: `Bearer ${token}` });
};
