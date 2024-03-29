const isUrl = require('is-url');
const geoip = require('geoip-lite');
const cryptoRandomString = require('crypto-random-string');
const validator = require('validator');
const mongoose = require('mongoose');

const Link = require('../model/link.modal');

exports.createNewLink = async (req, res) => {
  try {
    const long_url = req.body.long_url;
    const will_expire = req.body.will_expire;
    const link_value = req.body.link_value;
    const custom_link_name = req.body.custom_link_name;

    if (!long_url) throw new Error(`No URL found to shorten.`);
    if (!isUrl(long_url)) throw new Error(`URL is invalid`);
    if (will_expire) {
      if (!validator.isDate(will_expire, 'YYYY/MM/DD'))
        throw new Error(`Expire date is invalid 😢`);
      if (!validator.isAfter(will_expire))
        throw new Error(`Expire date should be after today, LOL 😆`);
    }
    if (link_value) {
      if (!validator.isNumeric(link_value) || link_value < 0)
        throw new Error(`The link value should be number 😥`);
    }

    const url_crypto = cryptoRandomString({ length: 7, type: 'url-safe' });
    const hasUrlCrypto = await Link.findOne({
      url_crypto: custom_link_name ? custom_link_name : url_crypto,
    });

    if (hasUrlCrypto)
      throw new Error(`Link name ${hasUrlCrypto.url_crypto} already exists`);

    let new_link = new Link({
      short_url: custom_link_name
        ? `${process.env.SERVER_URL}/${custom_link_name}`
        : `${process.env.SERVER_URL}/${url_crypto}`,
      url_crypto: custom_link_name ? custom_link_name : url_crypto,
      long_url: long_url,
      will_expire: will_expire ? will_expire : 'life_time',
      created_by: req.user.data._id,
      link_value: link_value ? link_value : 0,
    });
    new_link
      .save()
      .then(() => {
        return res.status(200).json({
          status: 'success',
          message: 'Short link created successfully 🎉',
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: 'error',
          message: err.message,
        });
      });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getShortLinks = async (req, res) => {
  try {
    const userID = req.user.data._id;
    const links = await Link.find(
      { created_by: userID },
      { analyze_data: 0 }
    ).sort('-createdAt');

    return res.status(200).json({
      status: 'success',
      data: links,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getShortLinkById = async (req, res) => {
  try {
    const linkID = req.params.id;
    const userID = req.user.data._id;
    if (!linkID) throw new Error(`ID not found to get link 😣`);
    const link = await Link.findOne({ _id: linkID, created_by: userID });
    if (!link) throw new Error(`No link found with the ID of ${linkID}`);

    return res.status(200).json({
      status: 'success',
      data: link,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.analyzeLink = async (req, res) => {
  try {
    const linkID = req.params.id;
    const userID = req.user.data._id;

    if (!linkID) throw new Error(`No ID found to analyze link 😥`);
    const hasLink = await Link.findOne(
      { _id: linkID, created_by: userID },
      { _id: 1 }
    );
    if (!hasLink) throw new Error(`No link found with the ID of ${linkID}`);

    const link_views = await Link.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(linkID) } },
      {
        $project: {
          totalClick: { $size: '$analyze_data' },
          totalAmount: {
            $sum: { $multiply: ['$link_value', { $size: '$analyze_data' }] },
          },
        },
      },
    ]);

    const country_count = await Link.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(linkID) } },
      { $unwind: '$analyze_data' },
      {
        $group: { _id: '$analyze_data.country', visitor: { $sum: 1 } },
      },
      {
        $sort: { visitor: -1 },
      },
    ]);

    const month_count = await Link.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(linkID) } },
      { $unwind: '$analyze_data' },
      {
        $group: {
          _id: { $substr: ['$analyze_data.timestamp', 5, 2] },
          totalClick: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    const daily_count = await Link.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(linkID) } },
      { $unwind: '$analyze_data' },
      {
        $group: {
          _id: {
            year: { $year: '$analyze_data.timestamp' },
            month: { $month: '$analyze_data.timestamp' },
            day: { $dayOfMonth: '$analyze_data.timestamp' },
          },
          visitor: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    return res.status(200).json({
      status: 'success',
      data: {
        ...link_views[0],
        totalTimeViews: daily_count ? daily_count : null,
        totalCountryViews: country_count ? country_count : null,
        totalMonthlyViews: month_count ? month_count : null,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getIpData = async (req, res) => {
  const url_crypto = req.params.url_crypto;
  res.redirect(`${process.env.CLIENT_URL}/redirect?url_crypto=${url_crypto}`);
};

exports.redirectShortLink = async (req, res) => {
  try {
    const url_crypto = req.params.url_crypto;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (!url_crypto) res.redirect(process.env.CLIENT_URL);
    const link = await Link.findOne({ url_crypto: url_crypto });
    if (!link) {
      return res.send(`The link is not found or deleted by the author`);
    }
    if (!ip) res.redirect(link.long_url);

    const url = await Link.findOne({
      url_crypto: url_crypto,
    });

    if (url.will_expire && validator.isBefore(url.will_expire)) {
      return res.send(`The link is deleted by the author`);
    }

    const geo = geoip.lookup(ip);
    const analyze = { ...geo, IP: ip, timestamp: new Date() };
    if (geo) {
      await Link.findOneAndUpdate(
          { url_crypto: url_crypto },
          { $push: { analyze_data: analyze } }
      )
    }
    res.redirect(link.long_url);

  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.deleteLink = async (req, res) => {
  try {
    const linkId = req.params.id;
    const link = await Link.findById(linkId);
    if (!link) throw new Error(`No like found with the ID of ${linkId}`);
    if (req.user.data._id !== link.created_by)
      throw new Error(`You are not authorized for this request 🔒`);

    link
      .deleteOne()
      .then(() => {
        return res.status(201).json({
          status: 'success',
          message: 'Short link deleted successfully 😛',
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: 'error',
          message: err.message,
        });
      });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.searchLink = async (req, res) => {
  try {
    const search = req.params.search;
    if (!search) throw new Error(`Input some text to search 🤦‍♂️`);
    const links = await Link.find(
      {
        created_by: req.user.data._id,
        $or: [
          { short_url: { $regex: search } },
          { url_crypto: { $regex: search } },
          { long_url: { $regex: search } },
          { created_by: { $regex: search } },
        ],
      },
      { analyze_data: 0 }
    ).sort('-createdAt');

    return res.status(200).json({
      status: 'success',
      data: links,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getWeek = () => {
  const curr = new Date(); // get current date
  const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  const last = first + 6; // last day is the first day + 6

  const firstday = new Date(curr.setDate(first));
  const lastday = new Date(curr.setDate(last));

  return { firstday, lastday };
};
