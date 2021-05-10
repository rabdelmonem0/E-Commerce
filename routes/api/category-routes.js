const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// https://localhost:3001/categories
router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: {
      model: Product,
      attribute: ['product_name']
    }
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
  // be sure to include its associated Products
});

// https://localhost:3001/categories/3
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attribute: ['category_id']
    }
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create()
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
