// Create a server with the following specifications:

// 1. import express and dotenv node modules
// 3. create the server with express and name it app
// 4. use port 8080 as default port
// 5. enable body parser to accept json data
// 6. state which port the server is listening to and log it to the console

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON request bodies
app.use(express.json());

app.use('/openai', require('./router'));

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
