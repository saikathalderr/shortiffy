const router = require('express').Router();
const { createNewLink } = require('./controller/link.controller');
const { checkToken } = require('./middleware/tokenCheck.middleware');

router.post('/create', checkToken, createNewLink);

module.exports = router;
