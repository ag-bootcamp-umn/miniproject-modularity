// I'm going to put all my product routes here
const router = require('express').Router();
const verifyCustomer = require("../../middleware/verify-customer");
const customerDB = require('../../db/customers.json');
const fs = require('fs')
const uuid = require('../../helpers/uuid');

router.get("/", (req, res) => {
  res.json( customerDB );
})

router.get("/:id", (req, res) => {
  const result = customerDB.find( cust => cust.id === parseInt(req.params.id))
  res.status(200).json(result);
})

router.post("/", (req, res) => {
  console.log(req.body);
  const { fname, lname, email } = req.body;
  if ( fname && lname && email ) {
    const newCustomer = {
      id: uuid(),
      fname,
      lname,
      email
    };
    customerDB.push(newCustomer)
 fs.writeFile('./db/customers.json', JSON.stringify(customerDB), (err) =>
 err ? console.error(err) : console.log('Success!'))
res.json('Post made');

  }
})

router.put("/:id", (req, res) => {
  //...
})

router.delete("/:id", (req, res) => {
  //...
})

module.exports = router;