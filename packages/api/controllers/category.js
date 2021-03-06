const Category = require('../models/category');
const Post = require('../models/post');
const { validateCategoryInput } = require('../validations/category');

exports.getCategory = async (req, res) => {
  const category = await Category.findOne({ slug: req.params.slug }).exec();
  if (!category)
    return res
      .status(400)
      .json({ success: false, errors: { message: 'Category not found' } });
  return res.status(200).json({ success: true, category });
};

exports.getCategories = async (req, res) => {
  const categories = await Category.find().sort({ createdAt: 'desc' });

  const withCount = [];
  for (const category of categories) {
    const count = await Post.count({
      category: category.id,
      published: true,
    }).exec();
    withCount.push({
      ...JSON.parse(JSON.stringify(category)),
      postCount: count,
    });
  }
  return res.status(200).json({
    success: true,
    categories: withCount,
  });
};

exports.createCategory = async (req, res) => {
  const { errors, isValid } = validateCategoryInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json({ success: false, errors });
  }

  const newCategory = new Category({
    name: req.body.name,
    description: req.body.description,
  });

  await newCategory.save();
  return res.status(200).json({ success: true, category: newCategory });
};

exports.deleteCategory = async (req, res) => {
  await Category.findOneAndDelete({ slug: req.params.slug }).exec();
  return res.status(200).json({ success: true });
};

exports.updateCategory = async (req, res) => {
  const { errors, isValid } = validateCategoryInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json({ success: false, errors });
  }

  const updatedCategory = await Category.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    { new: true, runValidators: true }
  )
    .select(['-comments'])
    .exec();
  return res.status(200).json({ success: true, post: updatedCategory });
};
