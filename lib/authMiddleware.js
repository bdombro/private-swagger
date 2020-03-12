// dependent on middleware: cookie-parser, body-parser
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = 'uasupersecret';
const password = 'helloua';
// const salt = '$2a$10$/FGItquRanGTQfVtl/lHl.'; // from bcrypt.genSaltSync(10)
// const passwordHash = bcrypt.hashSync(password, salt);

const loginHtml = `
<form method="post">
    <label for="password">Password</label>
    <input name="password" type="password"/>
    <button>Submit</button>
</form>
`;

module.exports = function (req, res, next) {
    if (req.method === 'POST' && req.body.password === password) {
        res.cookie(
            'auth',
            jwt.sign({data: 'hello'}, jwtSecret, { expiresIn: 86400 }),
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