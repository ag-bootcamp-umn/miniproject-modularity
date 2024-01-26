// This file acts as a gatekeeper for all routes

const router = require('express').Router();
const apiRoutes = require("./api");
const pageRoutes = require("./pages");
const verifyCustomer = require('../middleware/verify-customer');

// any routes beginning with /api, go and look in the api folder for more instructions
router.use("/api", verifyCustomer, apiRoutes)

// anything that is not an api route is handled here
router.use("*", verifyCustomer, pageRoutes)


module.exports = router;
