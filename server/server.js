const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

let whitelist = ['http://localhost:3000'];

const linkRoutes = require('./link.routes');
const userRoutes = require('./user.routes');
const { getIpData } = require('./controller/link.controller');

require('dotenv').config();
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      if (!origin) return callback(null, true);
      if (whitelist.indexOf(origin) === -1) {
        var message = `The CORS policy for this origin doesn't allow access from the particular origin.`;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);

const port = process.env.PORT || 8000;

app.get('/:url_crypto', getIpData);
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
    return console.log(err);
  });
