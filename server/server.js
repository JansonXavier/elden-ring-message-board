const express = require('express');
const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');

app.get('/home', (req, res) => {
  res.status(200).sendFile('../client/Home/Home.jsx')
});

app.use('/', apiRouter);

app.all('*', (req, res) => {
  return res.status(404).json({err: 'whatcha look for?'})
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
