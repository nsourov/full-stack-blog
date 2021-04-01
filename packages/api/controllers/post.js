const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const Post = require('../models/post');
const Comment = require('../models/comment');
const Category = require('../models/category');
const Notification = require('../models/notification');
const {
  validatePostInput,
  validateCommentInput,
} = require('../validations/post');

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

exports.upload = multer(multerOptions).fields([
  {
    name: 'primaryPhoto',
    maxCount: 1,
  },
  {
    name: 'secondaryPhoto',
    maxCount: 1,
  },
]);

exports.resize = async (req, res, next) => {
  // check if there is no new file to resize
  if (!req.files.primaryPhoto && !req.files.secondaryPhoto) {
    next(); // skip to the next middleware
    return;
  }
  if (req.files.primaryPhoto) {
    const extension1 = req.files.primaryPhoto[0].mimetype.split('/')[1];
    req.body.primaryPhoto = `${uuid.v4()}.${extension1}`;

    const photo1 = await jimp.read(req.files.primaryPhoto[0].buffer);
    await photo1.resize(800, jimp.AUTO);
    await photo1.write(`./public/uploads/${req.body.primaryPhoto}`);
  }
  if (req.files.secondaryPhoto) {
    const extension2 = req.files.secondaryPhoto[0].mimetype.split('/')[1];
    req.body.secondaryPhoto = `${uuid.v4()}.${extension2}`;

    const photo1 = await jimp.read(req.files.secondaryPhoto[0].buffer);
    await photo1.resize(800, jimp.AUTO);
    await photo1.write(`./public/uploads/${req.body.secondaryPhoto}`);
  }
  next();
};

exports.getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug })
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .exec();
  if (!post)
    return res
      .status(400)
      .json({ success: false, errors: { message: 'Post not found' } });
  const commentCount = await Comment.count({ post: post.id, published: true });

  const [nextPost] = await Post.find({ _id: { $gt: post.id } })
    .sort({ _id: 1 })
    .limit(1)
    .select(['slug', 'title']);

  const [prevPost] = await Post.find({ _id: { $lt: post.id } })
    .sort({ _id: -1 })
    .limit(1)
    .select(['slug', 'title']);

    return res.status(200).json({
    success: true,
    post: { ...JSON.parse(JSON.stringify(post)), commentCount },
    ...(nextPost && { nextPost }),
    ...(prevPost && { prevPost }),
  });
};

exports.getPostPublishedComments = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 10;
  const skip = page * limit - limit;

  const args = { post: req.params.postId, published: true };
  const commentsPromise = Comment.find(args)
    .populate('user', { password: 0, role: 0 })
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

exports.getPostUnPublishedComments = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 10;
  const skip = page * limit - limit;

  const args = { post: req.params.postId, published: false };
  const commentsPromise = Comment.find(args)
    .populate('user', { password: 0, role: 0 })
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

exports.getUserPostUnPublishedComments = async (req, res) => {
  const page = req.params.page || 1;
  const user = req.params.userId;
  const limit = 10;
  const skip = page * limit - limit;

  const args = { post: req.params.postId, published: false, user };
  const commentsPromise = Comment.find(args)
    .populate('user', { password: 0, role: 0 })
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

exports.getSearchPosts = async (req, res) => {
  const page = req.params.page || 1;
  const searchString = req.params.searchString || '';
  const limit = 10;
  const skip = page * limit - limit;

  const postsPromise = Post.find({
    published: true,
    $text: { $search: searchString },
  })
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count({
    published: true,
    $text: { $search: searchString },
  });

  const [posts, count] = await Promise.all([postsPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!posts.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }

  const withCount = [];
  for (const post of posts) {
    const count = await Comment.count({
      post: post.id,
      published: true,
    }).exec();
    withCount.push({
      ...JSON.parse(JSON.stringify(post)),
      commentCount: count,
    });
  }

  return res.status(200).json({
    success: true,
    posts: withCount,
    page,
    pages,
    count,
  });
};

exports.getPublishedPosts = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 5;
  const skip = page * limit - limit;

  const postsPromise = Post.find({ published: true })
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count({ published: true });

  const [posts, count] = await Promise.all([postsPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!posts.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }

  const withCount = [];
  for (const post of posts) {
    const count = await Comment.count({
      post: post.id,
      published: true,
    }).exec();
    withCount.push({
      ...JSON.parse(JSON.stringify(post)),
      commentCount: count,
    });
  }

  return res.status(200).json({
    success: true,
    posts: withCount,
    page,
    pages,
    count,
  });
};

exports.getPublishedCategoryPosts = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 5;
  const skip = page * limit - limit;

  const category = await Category.findOne({ slug: req.params.slug });
  if (!category) {
    return res.status(200).json({
      success: true,
      posts: [],
      page,
      pages: 0,
      count: 0,
    });
  }

  const postsPromise = Post.find({
    published: true,
    category: category.id,
  })
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count({
    published: true,
    category: category.id,
  });

  const [posts, count] = await Promise.all([postsPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!posts.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }

  const withCount = [];
  for (const post of posts) {
    const count = await Comment.count({
      post: post.id,
      published: true,
    }).exec();
    withCount.push({
      ...JSON.parse(JSON.stringify(post)),
      commentCount: count,
    });
  }

  return res.status(200).json({
    success: true,
    posts: withCount,
    page,
    pages,
    count,
  });
};

exports.getPublishedGuestsPosts = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 5;
  const skip = page * limit - limit;

  const postsPromise = Post.find({ published: true, guest_post: true })
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count({ published: true, guest_post: true });

  const [posts, count] = await Promise.all([postsPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!posts.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }

  const withCount = [];
  for (const post of posts) {
    const count = await Comment.count({
      post: post.id,
      published: true,
      guest_post: true,
    }).exec();
    withCount.push({
      ...JSON.parse(JSON.stringify(post)),
      commentCount: count,
    });
  }

  return res.status(200).json({
    success: true,
    posts: withCount,
    page,
    pages,
    count,
  });
};

exports.getUserPublishedPosts = async (req, res) => {
  const page = req.params.page || 1;
  const user = req.params.userId;
  const limit = 5;
  const skip = page * limit - limit;

  const postsPromise = Post.find({ published: true, user })
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count({ published: true, user });

  const [posts, count] = await Promise.all([postsPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!posts.length && skip) {
    return res
      .status(400)
      .json({ success: false, errors: { message: "Page doesn't exist" } });
  }

  const withCount = [];
  for (const post of posts) {
    const count = await Comment.count({
      post: post.id,
      user,
      published: true,
    }).exec();
    withCount.push({
      ...JSON.parse(JSON.stringify(post)),
      commentCount: count,
    });
  }

  return res.status(200).json({
    success: true,
    posts: withCount,
    page,
    pages,
    count,
  });
};

exports.getUnPublishedPosts = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 5;
  const skip = page * limit - limit;

  const postsPromise = Post.find({ published: false })
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count({ published: false });

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

exports.getUnPublishedGuestsPosts = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 5;
  const skip = page * limit - limit;

  const postsPromise = Post.find({ published: false, guest_post: true })
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count({ published: false, guest_post: true });

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

exports.getUserUnPublishedPosts = async (req, res) => {
  const page = req.params.page || 1;
  const user = req.params.userId;
  const limit = 5;
  const skip = page * limit - limit;

  const postsPromise = Post.find({ published: false, user })
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 'desc' });

  const countPromise = Post.count({ published: false, user });

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

exports.createPost = async (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json({ success: false, errors });
  }

  const images = [];
  if (req.body.primaryPhoto) {
    images.push(
      `${process.env.REACT_APP_API_URL}/uploads/${req.body.primaryPhoto}`
    );
  }
  if (req.body.secondaryPhoto) {
    images.push(
      `${process.env.REACT_APP_API_URL}/uploads/${req.body.secondaryPhoto}`
    );
  }

  const guest_post = req.user.role !== 'admin';
  let guestCategory;
  if (guest_post) {
    guestCategory = await Category.findOne({ slug: 'guest' }).exec();
  }

  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    images,
    user: req.user.id,
    category: guest_post ? guestCategory.id : req.body.categoryId,
    guest_post,
  });

  await newPost.save();

  if (guest_post) {
    const newNotification = new Notification({
      post: newPost.id,
      user: req.user.id,
      action: 'post',
      messagePrefix: 'submitted a',
    });
    await newNotification.save();
  }

  return res.status(200).json({ success: true, post: newPost });
};

exports.createAndPublishPost = async (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json({ success: false, errors });
  }

  const images = [];
  if (req.body.primaryPhoto) {
    images.push(
      `${process.env.REACT_APP_API_URL}/uploads/${req.body.primaryPhoto}`
    );
  }
  if (req.body.secondaryPhoto) {
    images.push(
      `${process.env.REACT_APP_API_URL}/uploads/${req.body.secondaryPhoto}`
    );
  }

  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    images,
    user: req.user.id,
    category: req.body.categoryId,
    published: true,
  });

  await newPost.save();
  return res.status(200).json({ success: true, post: newPost });
};

exports.deletePost = async (req, res) => {
  const post = await Post.findOneAndDelete({ slug: req.params.slug }).exec();
  await Notification.findOneAndDelete({
    post: post.id,
  });
  return res.status(200).json({ success: true });
};

exports.updatePost = async (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json({ success: false, errors });
  }

  const post = await Post.findOne({ slug: req.params.slug });
  let images = post.images || [];
  if (req.body.primaryPhoto) {
    images[0] = `${process.env.REACT_APP_API_URL}/uploads/${req.body.primaryPhoto}`;
  }
  if (req.body.secondaryPhoto) {
    images[1] =
      images[0] &&
      `${process.env.REACT_APP_API_URL}/uploads/${req.body.secondaryPhoto}`;
  }
  if (!images[0]) {
    images = [];
  }

  const updatedPost = await Post.findOneAndUpdate(
    { slug: req.params.slug },
    {
      ...req.body,
      images,
    },
    { new: true, runValidators: true }
  )
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .exec();
  return res.status(200).json({ success: true, post: updatedPost });
};

exports.publishPost = async (req, res) => {
  const updatedPost = await Post.findOneAndUpdate(
    { slug: req.params.slug },
    { published: true },
    { new: true, runValidators: true }
  )
    .select(['-comments'])
    .populate('category')
    .populate('user', { password: 0, role: 0 })
    .exec();
  return res.status(200).json({ success: true, post: updatedPost });
};

exports.likePost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post)
    return res
      .status(400)
      .json({ success: false, errors: { message: 'Post not found' } });

  const alreadyLiked = post.likes.filter(
    (like) => like.user.toString() === req.user.id
  );
  if (alreadyLiked.length > 0) {
    // dislike
    // Get remove index
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    // Splice out of array
    post.likes.splice(removeIndex, 1);
  } else {
    // like
    post.likes.unshift({ user: req.user.id });
  }
  await post.save();

  const guest_post = req.user.role !== 'admin';
  if (guest_post) {
    const newNotification = new Notification({
      post: post.id,
      user: req.user.id,
      action: 'like',
      messagePrefix: 'liked on',
    });
    await newNotification.save();
  }
  return res.status(200).json({ success: true });
};

exports.addComment = async (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json({ success: false, errors });
  }

  const post = await Post.findOne({ slug: req.params.slug });
  if (!post)
    return res
      .status(400)
      .json({ success: false, errors: { message: 'Post not found' } });
  const newComment = new Comment({
    user: req.user.id,
    post: post.id,
    body: req.body.body,
  });

  await newComment.save();
  post.comments.unshift(newComment.id);
  await post.save();

  const guest_post = req.user.role !== 'admin';
  if (guest_post) {
    const newNotification = new Notification({
      post: post.id,
      comment: newComment.id,
      user: req.user.id,
      action: 'comment',
      messagePrefix: 'commented on',
    });
    await newNotification.save();
  }
  return res.status(200).json({ success: true });
};

exports.deleteComment = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post)
    return res
      .status(400)
      .json({ success: false, errors: { message: 'Post not found' } });

  await Comment.findByIdAndDelete(req.params.commentId);
  await Notification.findOneAndDelete({ comment: req.params.commentId });
  return res.status(200).json({ success: true });
};

exports.updateComment = async (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json({ success: false, errors });
  }

  const post = await Post.findOne({ slug: req.params.slug });
  if (!post)
    return res
      .status(400)
      .json({ success: false, errors: { message: 'Post not found' } });

  const comment = await Comment.findByIdAndUpdate(
    req.params.commentId,
    req.body,
    { new: true, runValidators: true }
  );
  return res.status(200).json({ success: true, comment });
};
