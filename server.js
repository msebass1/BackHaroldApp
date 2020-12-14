const express = require('express');
const app = express();
const port = 3001;

app.use(require('./controllers/controller.js'));

app.get('/', (req, res) => {
  res.send('<div> cosa</div>')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
