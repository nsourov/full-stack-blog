const mongoose = require('mongoose');
const slug = require('slugs');

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    body: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    images: [String],
    slug: String,
    published: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    wouldBuy: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    guest_post: { type: Boolean, default: false },
  },
  { timestamps: true }
);

PostSchema.pre('save', async function (next) {
  if (!this.isModified('title')) {
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.title);
  // find other stores that have a slug of test, test-1, test-2
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const postsWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (postsWithSlug.length) {
    this.slug = `${this.slug}-${postsWithSlug.length + 1}`;
  }
  next();
});

PostSchema.index({ name: 'text', title: 'text' });

module.exports = mongoose.model('Post', PostSchema);
