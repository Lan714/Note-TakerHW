const router = require('express').Router()
const { text } = require('body-parser')

let notes  = require('../db/db.json')


router.get('/notes', (req, res) => {
  res.json(notes)
})


router.post('/notes', (req, res) => {

  let newNote =  req.body
  let newNoteId = note.length

  newNote.id = newNoteId

  notes.push(newNote)
  res.sendStatus(200)
})

router.delete('/notes/:id', (req, res) => {
  let noteId = req.params.noteId
  notes = notes.filter(note => note.id !== id)
  res.sendStatus(200)
})

module.exports = router 