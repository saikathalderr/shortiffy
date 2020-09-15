const router = require('express').Router();
const {
  createNewNormlaUser,
  loginNormlaUser,
  checkHasEmail,
} = require('./controller/user.controller');

router.post('/createNewNormlaUser', createNewNormlaUser);
router.post('/loginNormlaUser', loginNormlaUser);
router.get('/checkHasEmail/:email', checkHasEmail);

module.exports = router;
