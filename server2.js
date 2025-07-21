const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = 3002;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Metro map API
app.get('/api/metro', (req, res) => {
  fs.readFile('./data/metroData.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send("Error reading data.");
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`🚇 Metro Map server running at http://localhost:${PORT}`);
});
