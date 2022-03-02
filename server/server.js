const express = require('express');
const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.use((req, res) => {
  return res.redirect('/')
})

app.use((err, req, res, next) => {
  const defaultErr ={
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };

  const errObj = { ...defaultErr, ...err};
  console.log(errObj.log);
  res.status(errObj.status).send(errObj.message);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
