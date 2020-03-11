const express = require('express')
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
const session = require('express-session')
const passwordProtected = require('express-password-protect')

const config = {
    username: "john",
    password: "1234",
    maxAge: 60000 // 1 minute
}

const app = express()
app.use(passwordProtected(config))
app.use(express.static('dist')) // include dist directory
app.use(express.static(pathToSwaggerUi))


app.listen(3000, function() {
    console.info("Swagger is listening at http://localhost:3000")
})