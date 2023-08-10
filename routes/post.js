const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/posts/:postName/', postController.viewPost);

module.exports = router;
