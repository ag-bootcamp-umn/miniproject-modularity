// I'm going to put all my product routes here
const router = require('express').Router();
const authenticate = require('../../middleware/authenticate');
const productDB = require('../../db/products.json');

router.get("/", authenticate, (req, res) => {
  res.status(200).json(productDB);
})

router.get("/:id", (req, res) => {
  const result = productDB.find( prod => prod.id === req.params.id)
  res.status(200).json(result);
})

router.post("/", (req, res) => {
  //...
})

router.put("/:id", (req, res) => {
  //...
})

router.delete("/:id", (req, res) => {
  //...
})

module.exports = router;