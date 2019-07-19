const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const hello = require('./hello')

// Import API Routes
app.use(hello)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}