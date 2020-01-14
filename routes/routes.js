const express = require("express");
const Router = express.Router();

const createInvoice = require('../controllers/createInvoice');
const invoiceStatus = require('../controllers/invoiceStatus');

Router.post(
  "/invoice", function (req, res) {
    createInvoice.main(req, res);
  }
);

Router.post(
  "/invoiceStatus", function (req, res) {
    invoiceStatus.main(req, res);
  }
);

module.exports = Router;
