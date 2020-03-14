import cookieParser from 'cookie-parser';
import express from 'express';
import shrinkRay from 'shrink-ray-current';
import passwordProtected from 'password-protected';
const repo = require('../../package.json').repository.url.slice(4);

const app = express();
app.use(shrinkRay());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(passwordProtected({
    hint: `Hint: password is 'superpassword'. Source code for this app is in <a target='_blank' href='${repo}'>github</a>.`,
}));
app.use(express.static(__dirname + "/private")); // include any other files dist directory
app.listen(3000, () => {
    console.info("Swagger is listening at http://localhost:3000");
});