// I'm going to put all my product routes here
const router = require('express').Router();
const verifyCustomer = require("../../middleware/verify-customer");
const customerDB = require('../../db/customers.json');
const fs = require('fs')

/////////////////////////// from lesson 21/ un-modular / server.js
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};
///////////////////////////////////////////////////////////////
router.get("/", (req, res) => {
  res.json( customerDB );
})

router.get("/:id", (req, res) => {
  const result = customerDB.find( cust => cust.id === parseInt(req.params.id))
  res.status(200).json(result);
})

router.post("/", (req, res) => {
  const { id, fname, lname, email } = req.body;
  console.log()
  if ( id && fname && lname && email) {
    const newCustomer = {
      id,
      fname,
      lname,
      email
    };

    const newCustomerDB = customerDB.push(newCustomer)
 fs.writeFile('../../db/customer.json', newCustomerDB, (err) =>
 err ? console.error(err) : console.log('Success!'))
 



  }
})

router.put("/:id", (req, res) => {
  //...
})

router.delete("/:id", (req, res) => {
  //...
})

module.exports = router;