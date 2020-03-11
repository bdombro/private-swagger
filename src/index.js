const express = require('express')
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

const app = express()

app.use(express.static('dist')) // include dist directory
app.use(express.static(pathToSwaggerUi))

app.listen(3000)
console.info("Swagger is listening at http://localhost:3000")