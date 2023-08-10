const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

const Post = mongoose.model("Post", postsSchema);

module.exports = {
  getPostList: async () => {
    try {
      const foundItems = await Post.find({});
      return foundItems;
    } catch (err) {
      console.error('Error:', err);
      return [];
    }
  },
  createNewPost: async (title, content) => {
    try {
      const newPost = new Post({
        title: title,
        content: content
      });
      const result = await newPost.save();
      console.log("Post saved in db");
      return result;
    } catch (err) {
      console.error("Error saving document:", err);
      throw err;
    }
  },
  removePostByTitle: async (title) => {
    try {
      const result = await Post.deleteOne({ title: title });
      if (result.deletedCount === 1) {
        console.log('Post removed from db');
      } else {
        console.log(`No post found with title "${title}"`);
      }
    } catch (err) {
      console.error("Error removing document:", err);
      throw err;
    }
  }
};
