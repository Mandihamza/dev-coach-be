const router = require('express').Router();

const chatController = require('./chat-controllers');
const checkAuth = require('../../utils/check-auth');

router.post('/:id', checkAuth, chatController.chat);
module.exports = router;