# Dynamic Blog Website

Welcome to the Dynamic Blog Website repository! This project showcases a web application built with Express.js and MongoDB, following the Model-View-Controller (MVC) architecture. It's designed to create, display, and manage blog posts.

## Description

The Dynamic Blog Website is a full-fledged web application that provides users with an interactive platform to explore a collection of blog posts. With a focus on clean code structure and user experience, this project demonstrates the implementation of essential web development concepts.

### Key Features

- **MVC Architecture**: The project is structured using the Model-View-Controller (MVC) design pattern, which enhances code organization, reusability, and scalability.

- **Express.js Backend**: The backend of the application is built using Express.js, a popular web application framework for Node.js. Express.js facilitates route handling, middleware integration, and RESTful API design.

- **MongoDB Integration**: MongoDB, a NoSQL database, is seamlessly integrated into the project to store and manage blog post data. The project's models interact with the database to handle data retrieval and manipulation.

- **EJS Templating Engine**: EJS (Embedded JavaScript) is used to create dynamic HTML templates. This allows for the dynamic rendering of content and the seamless integration of server-side logic into views.

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
- `/about`: Information about the author and the website.
- `/contact`: Contact details and information.
- `/compose`: A page to add new blog posts.
- `/omission`: View and remove blog posts using their titles.
- `/posts/:postName`: Displays an individual blog post based on its title.

## Contributing

Contributions are welcome! Feel free to submit pull requests or report issues in the [Issues](https://github.com/yourusername/dynamic-blog-website/issues) section.
