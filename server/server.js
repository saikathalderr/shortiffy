const express = require('express');
const mongoose = require('mongoose');
var morgan = require('morgan');
const app = express();

const linkRoutes = require('./link.routes');
const userRoutes = require('./user.routes');

require('dotenv').config();
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);
app.use(express.json());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Hello welcome to Shortiffy!'));
app.use('/link', linkRoutes);
app.use('/user', userRoutes);

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  })
  .catch((err) => {
    return console.log(err.message);
  });
