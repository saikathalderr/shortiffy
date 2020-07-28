const router = require('express').Router();
const {
  createNewLink,
  getShortLinks,
} = require('./controller/link.controller');
const { checkToken } = require('./middleware/tokenCheck.middleware');

router.post('/create', checkToken, createNewLink);
router.get('/getLinks', checkToken, getShortLinks);

module.exports = router;
