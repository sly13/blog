const Pool = require('pg').Pool
const pool = new Pool({
  user: 'blog',
  host: 'localhost',
  database: 'blog',
  password: 'blog',
  port: 5432,
})

const getCategories = (request, response) => {
    pool.query('SELECT * FROM category ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getCategoryById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM category WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createCategory = (request, response) => {
    const { name } = request.body
    pool.query('INSERT INTO category (name) VALUES ($1)', [name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Category added`)
    })
  }
  
  const updateCategory = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body
  
    pool.query(
      'UPDATE category SET name = $1 WHERE id = $2',
      [name, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Category modified with ID: ${id}`)
      }
    )
  }
  
  const deleteCategory = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM Category WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Category deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
  }
  