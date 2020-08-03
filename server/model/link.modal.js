const mongoose = require('mongoose');

const Link = new mongoose.Schema(
  {
    short_url: {
      type: String,
      required: [true, 'Short URL is required'],
    },
    long_url: {
      type: String,
      required: [true, 'Long URL is required'],
    },
    will_expire: {
      type: String,
      required: false,
    },
    link_value: {
      type: Number,
      default: 0,
    },
    created_by: {
      type: String,
      required: [true, 'Created by is required'],
    },
    analyze_data: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Link', Link);
