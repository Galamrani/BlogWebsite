require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();

// Set up app configurations and middleware 
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// Connect to the MongoDB database
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo postsDB');
});


// Use the route files
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');
const composeRoutes = require('./routes/compose');
const postRoutes = require('./routes/post');
const omissionRoutes = require('./routes/omission');

app.use('/', homeRoutes);
app.use('/', aboutRoutes);
app.use('/', contactRoutes);
app.use('/', composeRoutes);
app.use('/', postRoutes);
app.use('/', omissionRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

