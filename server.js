require('dotenv').config();

const express = require('express');
const app = express();
const {actions, audit} = require('./bot.js');

app.use(express.json());

app.post('/', function(request, response) {
  const data = request.body;
  const action = data.action;
  if (!actions.hasOwnProperty(action)) {
    response.end();
    return;
  }
  // actions[action](data, response);
  console.log(data);
  response.end();
});

app.get('/', async (request, response) => {
  response.send('OK');
});

// TODO(kaycebasques): Only allow this to run while developing.
// app.get('/:number', async (request, response) => {
//   const data = await audit(request.params.number);
//   response.header('Content-Type', 'application/json');
//   response.send(JSON.stringify(data, null, 2));
// });

const listener = app.listen(2021, function() {
  console.log(`App is running on http://localhost:${listener.address().port}`);
});
