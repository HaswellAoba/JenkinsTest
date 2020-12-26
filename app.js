const express = require('express');

const PORT = 7831;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Jenkins Retry');
});

app.listen(PORT, HOST);
