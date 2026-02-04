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

module.exports = app;