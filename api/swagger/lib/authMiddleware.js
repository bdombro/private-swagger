// dependent on middleware: cookie-parser, body-parser
const jwt = require('jsonwebtoken');

const jwtSecret = 'uasupersecret';
const password = 'helloua';

const loginHtml = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Swagger UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
    </head>
    <body>
        <form method="post">
            <label for="password">Password</label>
            <input name="password" type="password"/>
            <button>Submit</button>
        </form>
    </body>
</html>
`;

module.exports = function (req, res, next) {
    if (req.method === 'POST' && req.body.password === password) {
        res.cookie(
            'auth',
            jwt.sign({data: {name: "UA User", role: "admin"}}, jwtSecret, { expiresIn: 86400 }),
            {maxAge: 86400}
        );
        res.write("<script>window.location='/'</script>");
        res.end();
    }
    else {
        jwt.verify(req.cookies.auth, jwtSecret, (err, decoded) => {
            if (err) {
                res.send(loginHtml);
                res.end();
            }
            else next();
        })
    }
};