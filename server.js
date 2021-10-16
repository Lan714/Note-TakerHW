const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extend: true }))
app.use(express.json())

app.use(require('./routes'))

app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT || 3000)