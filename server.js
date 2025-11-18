// server.js
const express = require('express');
const path = require('path');
const movies = require('./data/movies');

const app = express();
const PORT = 3000;

// Serve static frontend from /public
app.use(express.static(path.join(__dirname, 'public')));

// 1) GET /movies - return all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// 2) GET /movies/classics - return only classics
app.get('/movies/classics', (req, res) => {
  const classics = movies.filter(m => m.isClassic);
  res.json(classics);
});

// 3) GET /movies/genres - unique genres with counts
app.get('/movies/genres', (req, res) => {
  const counts = movies.reduce((acc, m) => {
    acc[m.genre] = (acc[m.genre] || 0) + 1;
    return acc;
  }, {});
  const genres = Object.entries(counts).map(([name, movieCount]) => ({ name, movieCount }));
  res.json({ genres });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
