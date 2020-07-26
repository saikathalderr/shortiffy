const router = require('express').Router();
const { createNewUser } = require('./controller/user.controller');

router.post('/create', createNewUser);

module.exports = router;
