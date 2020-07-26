const router = require('express').Router();
const { createNewNormlaUser } = require('./controller/user.controller');

router.post('/create', createNewNormlaUser);

module.exports = router;
