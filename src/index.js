const { response } = require('express');
const express = require('express');

const app = express();

let category = {
  id: '18923012-0128301923-1823012',
  title: 'Apenas mais uma categoria',
  description: 'Esta é uma categoria diferente',
  status: true
}

app.get('/', (request, response) => {
  return response.json({message: 'NodeJS API Rest'});
});

// Endpoint to Categories list

app.get('/categories', (request, response) => {
  return response.status(200).json(category);
});

// Endpoint to get a single category
app.get('categories/:id', (request, response) => {
  return response.status(200).json(category);
});


app.listen(3333);


