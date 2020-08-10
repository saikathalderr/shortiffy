const router = require('express').Router();
const {
  createNewLink,
  getShortLinks,
  deleteLink,
  getShortLinkById,
  analyzeLink,
  redirectShortLink,
} = require('./controller/link.controller');
const { checkToken } = require('./middleware/tokenCheck.middleware');

router.post('/create', checkToken, createNewLink);
router.delete('/delete/:id', checkToken, deleteLink);
router.get('/getLinks', checkToken, getShortLinks);
router.get('/getLinkById/:id', checkToken, getShortLinkById);
router.get('/analyzeLink/:id', checkToken, analyzeLink);
router.get('/redirectShortLink/:url_crypto', redirectShortLink);

module.exports = router;
