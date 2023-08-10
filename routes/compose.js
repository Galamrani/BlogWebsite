const express = require('express');
const router = express.Router();

const composeController = require('../controllers/composeController');

router.get('/compose', composeController.composePosts);
router.post('/compose', composeController.createPosts);


module.exports = router;
