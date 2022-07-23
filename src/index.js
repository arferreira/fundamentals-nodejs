const express = require('express');

const app = express();


app.get('/', (request, response) => {
  return response.json({
    'name': 'title'
  });
});


app.listen(3333);


