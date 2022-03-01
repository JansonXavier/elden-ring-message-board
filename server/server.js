const express = require('express');
const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', apiRouter);

app.all('*', (req, res) => {
  return res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
