const express = require('express');
const morgan = require('morgan');
const path = require('path');

const viewsRouter = require('./routes/viewsRoutes');
const artRouter = require('./routes/artRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTS
app.use('/', viewsRouter);
app.use('/arts', artRouter);


module.exports = app;
