// I'm going to put all my store routes here

const router = require('express').Router();
const productDB = require('../../db/store.json');

router.get("/", (req, res) => {
  //...
})

router.get("/:id", (req, res) => {
  //...
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