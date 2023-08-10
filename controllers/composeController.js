
const {createNewPost} = require('../models/postModel');

// Controller functions for the compose and create post
exports.composePosts = (req, res) => {
    res.render('../views/compose');
};

exports.createPosts = (req, res) => {
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
      };

      createNewPost(post.title, post.content);
      res.redirect("/");
};
