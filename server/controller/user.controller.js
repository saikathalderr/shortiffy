const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = process.env.BCRYPE_SALT_ROUND;
const User = require('../model/user.modal');

exports.createNewNormlaUser = async (req, res) => {
  try {
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;
    const user_type = 'normal';
    const is_social_user = false;
    const hasEmail = await User.findOne({ email: email });

    if (!full_name || !email || !password)
      throw new Error(`full_name or email or password is missing 😥`);

    if (!validator.isEmail(email)) throw new Error(`Invalid email address 😥`);
    if (hasEmail) throw new Error(`Email address is already in use 😒`);

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

exports.loginNormlaUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email) throw new Error('Email is required for logging in. 😑');
    if (!password) throw new Error('Password is required for logging in. 😒');

    const hasUser = await User.findOne({ email: email });

    if (!hasUser)
      throw new Error(`No account found with the email of ${email}`);

    bcrypt.compare(password, hasUser.password, function (err, result) {
      if (err) throw new Error(err);
      if (!result) {
        return res.status(500).json({
          status: 'error',
          message: `Wrong password 😕`,
        });
      }

      let user = { ...hasUser._doc };
      delete user['password'];
      delete user['createdAt'];
      delete user['updatedAt'];
      delete user['__v'];

      let exp = Math.floor(Date.now() / 1000) + 60 * 60;
      let token = jwt.sign(
        {
          exp: exp,
          data: user,
        },
        process.env.SECRET
      );

      return res.status(200).json({
        status: 'success',
        message: `Login successfull, welcome ${hasUser.full_name}`,
        token: token,
      });
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.checkHasEmail = async (req, res) => {
  try {
    const email = req.params.email;
    if (!email) throw new Error(`Input an email address to check 🥱`)
    const hasUser = await User.findOne({ email: email })
    if (hasUser) {
      return res.status(200).json({
        status: 'success',
        message: 'has email',
      }); 
    }
    return res.status(200).json({
      status: 'success',
      message: 'no email',
    }); 
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
}