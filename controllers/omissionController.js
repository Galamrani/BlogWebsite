
const {removePostByTitle} = require('../models/postModel');
const {getPostList} = require('../models/postModel');

// Controller functions for the fatch and remove post
exports.removePosts = (req, res) => {
    const postTitle = req.body.postTitle;
    removePostByTitle(postTitle); 
    res.redirect('/omission');
};

exports.fetchPosts = async (req, res) => {
    try {
        const posts = await getPostList();
        res.render('../views/omission', { posts: posts });
      } catch (err) {
        console.error('Error:', err);
        res.render('../views/omission', { posts: [] });
      }
};
