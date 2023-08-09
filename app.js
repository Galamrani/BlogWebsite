
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const homeStartingTitle = "A Glimpse into My Coding Journey: Exploring Web Development, .NET and Technical Interview Prep";
const homeStartingContent = "Hey there, this is my humble corner of the digital world, where Im excited to share the honest ups and downs of my coding escapades. This blog is my personal diary of projects – from simple experiments to those quirky creations that keep me up at night. There won't be any flashy titles here just stories of trial, error, and a lot of learning. Join me as I peel back the curtain on the technologies that have caught my attention, whether its Web Dev, unraveling the intricacies of .NET, diving into Python projects, or even preparing for technical interviews.I'm here to share my journey – the joy, the struggles, and everything in between.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";



mongoose.connect("mongodb://127.0.0.1:27017/postsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo postsDB');
});


const postsSchema = new mongoose.Schema({
  title: { type: String, required: true},
  content: { type: String, required: true }
});
const Post = mongoose.model("Post", postsSchema);


app.get("/", async function(req, res){
  try {
    const posts = await getPostList(); 
    res.render(__dirname + "/views/home", {homeStartingTitle: homeStartingTitle, homeStartingContent: homeStartingContent, posts: posts});
  } catch (err) {
    console.error('Error:', err);
    res.render(__dirname + "/views/home", {homeStartingTitle: homeStartingTitle, homeStartingContent: homeStartingContent, posts: []}); 
  }
});


app.get("/about", function(req, res){
  res.render(__dirname + "/views/about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render(__dirname + "/views/contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render(__dirname + "/views/compose");
});

app.get("/omission", async function(req, res){
  try {
    const posts = await getPostList();
    res.render(__dirname + "/views/omission", { posts: posts });
  } catch (err) {
    console.error('Error:', err);
    res.render(__dirname + "/views/omission", { posts: [] });
  }
});

app.post("/omission", function(req, res){
  const postTitle = req.body.postTitle;
  removePostByTitle(postTitle); 
  res.redirect("/omission"); 
});


app.post("/compose", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  savePost(post);
  res.redirect("/");
});

app.get("/posts/:postName", async function(req, res){
  const postName = _.lowerCase(req.params.postName);
  try {
    const posts = await getPostList();
    posts.forEach(function(post){
      const postTitle = _.lowerCase(post.title);
      if(postTitle === postName)
      {
        res.render("post", {title: post.title, content: post.content});
      }
    })
  } catch (err) {
    console.error("Error displaying post:", err);
  }
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


async function savePost(post) {
  const newPost = new Post({ 
    title: post.title, 
    content: post.content });
  try {
    const result = await newPost.save();
    console.log("Post saved in db");
  } catch (err) {
    console.error("Error saving document:", err);
  }
}

async function removePostByTitle(title) {
  try {
    const result = await Post.deleteOne({ title: title });
    if (result.deletedCount === 1) {
      console.log(`Post with title "${title}" removed from db`);
    } else {
      console.log(`No post found with title "${title}"`);
    }
  } catch (err) {
    console.error("Error removing document:", err);
  }
}

async function getPostList() {
  try {
    const foundItems = await Post.find({});
    return foundItems;
  } catch (err) {
    console.error('Error:', err);
    return [];
  }
}
