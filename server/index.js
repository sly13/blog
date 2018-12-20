const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

const db = require('./queries')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)   

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/category', db.getCategories)
app.get('/category/:id', db.getCategoryById)
app.post('/category', db.createCategory)
app.put('/category/:id', db.updateCategory)
app.delete('/category/:id', db.deleteCategory)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})