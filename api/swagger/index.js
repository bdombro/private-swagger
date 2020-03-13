const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const shrinkRay = require('shrink-ray-current');
const authMiddleware = require('./lib/authMiddleware');

const app = express();
app.use(cookieParser());
app.use(bodyParser());
app.use(shrinkRay());
app.use(authMiddleware('superpassword', 'supersecret'));
app.use(express.static(__dirname + "/private")); // include any other files dist directory
app.listen(3000, () => {
    console.info("Swagger is listening at http://localhost:3000");
});