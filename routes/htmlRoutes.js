const router = require('express').Router()
const { join } = require('path')

router.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, '../public/notes.html'))
})

module.exports = router