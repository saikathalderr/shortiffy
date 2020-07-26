const router = require('express').Router();
const { createNewNormlaUser } = require('./controller/user.controller');

router.post('/createNewNormlaUser', createNewNormlaUser);

module.exports = router;
