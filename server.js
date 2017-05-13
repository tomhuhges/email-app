/* eslint no-console: 0 */

const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config');

const app = express();

app.set('port', (process.env.PORT || 3000));

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
  app.use(express.static(path.join(__dirname, 'dist')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
