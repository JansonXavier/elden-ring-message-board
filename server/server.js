const express = require('express');
const { deleteMessage } = require('./controllers/messageController')
const apiRouter = require('./routes/api');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

// handle delete message here because home is getting added to the path of my fetch req
app.delete('/home/api/message/:_id', deleteMessage, (req, res) => {
  return res.status(200).json({ message: res.locals.message })
})

app.use('*', (req, res) => {
  return res.redirect('/')
})

app.use((err, req, res, next) => {
  const defaultErr = {
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
