const express = require('express');
const app = express();


app.use(express.json());

const notes = []

app.post('/notes', (req, res) => {
 notes.push(req.body)
 res.status(201).send({ message: 'Note created successfully' });
});

app.get('/notes', (req, res) => {
  res.status(200).json({message: 'Notes get successfully', notes})
})

app.delete('/notes/:index', (req, res) => {
  const index = req.params.index;
 notes.splice(index, 1);
  res.status(200).json({message: 'Note deleted successfully'})
})

app.patch('/notes/:index', (req, res) => {
  const index = req.params.index;
  const updatedNote = req.body;
  notes[index] = updatedNote;
  res.status(200).json({message: 'Note updated successfully'})
})
module.exports = app;