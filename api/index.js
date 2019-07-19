const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const tour = require('./tour')
const review = require('./review')

// Import API Routes
app.use([
  tour,
  review,
])

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
