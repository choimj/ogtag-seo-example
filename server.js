import express from 'express';
import path from 'path';
import fs from 'fs';

// React
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', function (request, response) {});

app.get('/post/:id', function (request, response) {
  console.log('Contact page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Contact Page');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Contact page description');
    const result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function (request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
