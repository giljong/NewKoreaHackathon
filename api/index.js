const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const hello = require('./hello')
const tour = require('./tour')

// Import API Routes
app.use(hello)
app.use(tour)
// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}