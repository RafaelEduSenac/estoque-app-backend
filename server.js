const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./models/Product'); 
const sequelize = require('./database'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
}).catch(err => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});

app.get('/products', async (req, res) => {
  const products = await Product.findAll(); 
  res.json(products);
});

app.post('/products', async (req, res) => {
  try {
    const { name, description, quantity, photo } = req.body;
    if (!name || !description || !quantity || !photo) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    const product = await Product.create({ name, description, quantity, photo });
    res.status(201).json(product);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
});


app.put('/products/:id', async (req, res) => {
  const id = req.params.id;
  const { name, description, quantity, photo } = req.body;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }
  product.name = name;
  product.description = description;
  product.quantity = quantity;
  product.photo = photo;
  await product.save();
  res.json(product);
});

app.delete('/products/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }
  await product.destroy();
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
