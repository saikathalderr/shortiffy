const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: [true, 'Full name is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    user_type: {
      type: String,
      required: [true, 'User type is required'],
    },
    is_social_user: {
      type: Boolean,
      default: false,
      required: [true, 'User is from social network or not is required'],
    },
    social_account_details: {
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', User);
