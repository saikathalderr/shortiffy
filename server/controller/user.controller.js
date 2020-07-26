const validator = require('validator');
const bcrypt = require('bcrypt');
const saltRounds = process.env.BCRYPE_SALT_ROUND;
const User = require('../model/user.modal');

exports.createNewNormlaUser = async (req, res) => {
  try {
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;
    const user_type = req.body.user_type;
    const is_social_user = false;

    if (!full_name || !email || !password || !user_type)
      throw new Error(
        `full_name or email or password or user_type is missing 😥`
      );

    if (!validator.isEmail(email)) throw new Error(`Invalid email address 😥`);

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        const new_user = new User({
          full_name,
          email,
          password: hash,
          user_type,
          is_social_user,
        });

        new_user
          .save()
          .then(() => {
            return res.status(200).json({
              status: 'success',
              message: 'User created successfully 🎉',
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: 'error',
              message: err.message,
            });
          });
      });
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
