const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(require('./controllers/controller.js'));

app.get('/', (req, res) => {
  res.send('Started running')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
