const isUrl = require('is-url');
const cryptoRandomString = require('crypto-random-string');
const validator = require('validator');

const Link = require('../model/link.modal');

exports.createNewLink = async (req, res) => {
  try {
    const long_url = req.body.long_url;
    const will_expire = req.body.will_expire;
    const link_value = req.body.link_value;
    const custom_link_name = req.body.custom_link_name

    if (!long_url) throw new Error(`No URL found to shorten.`);
    if (!isUrl(long_url)) throw new Error(`URL is invalid`);
    if (will_expire) {
      if (!validator.isDate(will_expire, 'YYYY/MM/DD'))
        throw new Error(`Expire date is invalid 😢`);
      if (!validator.isAfter(will_expire))
        throw new Error(`Expire date should be after today, LOL 😆`);
    }
    if(link_value) {
      if(!validator.isNumeric(link_value) || link_value < 0) throw new Error(`The link value should be number 😥`) 
    }

    const url_crypto = cryptoRandomString({ length: 7, type: 'base64' });
    const hasUrlCrypto = await Link.findOne({ 'url_crypto': custom_link_name ? custom_link_name : url_crypto })

    if (hasUrlCrypto) throw new Error(`Link name ${hasUrlCrypto.url_crypto} already exists`)

    let new_link = new Link({
      short_url: custom_link_name ? `${process.env.SERVER_URL}/${custom_link_name}` : `${process.env.SERVER_URL}/${url_crypto}`,
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
    const links = await Link.find({ created_by: userID }).sort('-createdAt');

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
