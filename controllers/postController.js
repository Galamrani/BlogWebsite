
const _ = require("lodash");
const {getPostList} = require('../models/postModel');

// Controller function for displaying individual post
exports.viewPost = async (req, res) => {
  const postName = _.lowerCase(req.params.postName);
  
  try {
    const posts = await getPostList();
    
    const post = posts.find(post => _.lowerCase(post.title) === postName);
    if (post) {
      res.render('../views/post', { title: post.title, content: post.content });
    } else {
      // Handle case when post is not found
      res.status(404).render("notFound"); 
    }
  } catch (err) {
    console.error("Error displaying post:", err);
    res.status(500).render("error"); 
  }
};
