# Dynamic Blog Website

Welcome to the Blog Website repository! This project showcases a web application built with Node.js, Express.js, MongoDB, HTML, and CSS following the Model-View-Controller (MVC) architecture. It's designed to create, display, and manage blog posts.

## Description

The Blog Website is a full-fledged web application that provides users with an interactive platform to explore a collection of blog posts. With a focus on clean code structure and user experience, this project demonstrates the implementation of essential web development concepts.

### Key Features

- **MVC Architecture**: The project is structured using the Model-View-Controller (MVC) design pattern, which enhances code organization, reusability, and scalability.

- **Node.js and Express.js Backend**: The backend of the application is built using Node.js and Express.js.

- **MongoDB Integration**: MongoDB database, is integrated into the project to store and manage blog post data.

- **EJS Templating HTML and CSS**: EJS and CSS are used to create stylish HTML templates.

### Project Structure

The codebase is organized into various directories:

- `app.js`: The entry point of the application where server setup and configuration take place.
- `public/`: This directory contains static assets like CSS, JavaScript, and images.
- `routes/`: Contains route files that define the application's endpoints and their corresponding controllers.
- `controllers/`: Houses controller files that handle the logic for different routes.
- `views/`: Contains EJS templates for rendering the dynamic content of the application.
- `models/`: Holds model files that interact with the MongoDB database.

The application includes the following routes:

- `/`: The homepage displays a collection of blog posts.
- `/about`: Learn about the author and the website.
- `/contact`: Find contact details and additional information.
- `/compose`: Create and add new blog posts.
- `/omission`: View and remove blog posts using their titles.
- `/posts/:postName`: View individual blog posts based on their titles.
