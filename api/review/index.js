const router = require('express').Router()

router.get('/review/:id', (req, res, next) => {
  res.json([
    { id: 1, author: 'foo', content: 'good', star: '5' },
    { id: 2, author: 'bar', content: 'good', star: '4.5' },
    { id: 3, author: 'baz', content: 'good', star: '5' },
  ])
})

module.exports = router