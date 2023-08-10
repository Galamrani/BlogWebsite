const express = require('express');
const router = express.Router();

const omissionController = require('../controllers/omissionController');

router.get('/omission', omissionController.fetchPosts);
router.post('/omission', omissionController.removePosts);


module.exports = router;