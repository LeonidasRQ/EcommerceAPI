const express = require('express');
const CategoriesService = require('./../services/category.service');

const router = express.Router();
const service = new CategoriesService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const categories = service.findOne(id);
  res.json(categories);
});

module.exports = router;
