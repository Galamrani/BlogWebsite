
const {getPostList} = require('../models/postModel');
const homeStartingTitle = "A Glimpse into My Coding Journey: Exploring Web Development, .NET and Technical Interview Prep";
const homeStartingContent = "Hey there, this is my humble corner of the digital world, where Im excited to share the honest ups and downs of my coding escapades. This blog is my personal diary of projects – from simple experiments to those quirky creations that keep me up at night. There won't be any flashy titles here just stories of trial, error, and a lot of learning. Join me as I peel back the curtain on the technologies that have caught my attention, whether its Web Dev, unraveling the intricacies of .NET, diving into Python projects, or even preparing for technical interviews.I'm here to share my journey – the joy, the struggles, and everything in between.";

// Controller function for the home page
exports.homePage = async (req, res) => {
  try {
    const posts = await getPostList();
    res.render('../views/home', {homeStartingTitle: homeStartingTitle, homeStartingContent: homeStartingContent, posts: posts});
  } catch (err) {
    console.error('Error:', err);
    res.render('../views/home', {homeStartingTitle: homeStartingTitle, homeStartingContent: homeStartingContent, posts: []});
  }
};
