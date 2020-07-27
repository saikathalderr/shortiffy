const router = require('express').Router();
const {
  createNewNormlaUser,
  loginNormlaUser,
} = require('./controller/user.controller');

router.post('/createNewNormlaUser', createNewNormlaUser);
router.post('/loginNormlaUser', loginNormlaUser);

module.exports = router;
