const isUrl = require('is-url');
const cryptoRandomString = require('crypto-random-string');
const validator = require('validator');

const Link = require('../model/link.modal');

exports.createNewLink = async (req, res) => {
  try {
    const long_url = req.query.long_url;
    const will_expire = req.query.will_expire;
    const created_by = req.query.created_by;
    if (!created_by) throw new Error(`You are not authorized 🛑`);
    if (!long_url) throw new Error(`No URL found to shorten.`);
    if (!isUrl(long_url)) throw new Error(`URL is invalid`);
    if (will_expire) {
      if (!validator.isDate(will_expire, 'YYYY/MM/DD'))
        throw new Error(`Expire date is invalid 😢`);
      if (!validator.isAfter(will_expire))
        throw new Error(`Expire date should be after today, LOL 😆`);
    }

    const url_crypto = cryptoRandomString({ length: 10, type: 'base64' });

    let new_link = new Link({
      short_url: `${process.env.SERVER_URL}/${url_crypto}`,
      long_url: long_url,
      will_expire: will_expire ? will_expire : 'life_time',
      created_by,
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
