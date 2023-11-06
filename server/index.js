const express = require('express');
const app = express();
const cors = require('cors');

const students = [
  { id: 1, name: 'Étudiant 1' },
  { id: 2, name: 'Étudiant 2' },
  { id: 3, name: 'Étudiant 3' },
];
app.use(cors());
app.get('/api/students', (req, res) => {
  res.json(students);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
