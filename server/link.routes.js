const router = require('express').Router();
const {
  createNewLink,
  getShortLinks,
  deleteLink,
} = require('./controller/link.controller');
const { checkToken } = require('./middleware/tokenCheck.middleware');

router.post('/create', checkToken, createNewLink);
router.delete('/delete/:id', checkToken, deleteLink);
router.get('/getLinks', checkToken, getShortLinks);

module.exports = router;
