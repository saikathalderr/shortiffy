const router = require('express').Router();
const { createNewLink } = require('./controller/link.controller');

router.post('/create', createNewLink);

module.exports = router;
