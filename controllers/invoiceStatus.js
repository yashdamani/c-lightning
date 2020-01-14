const LightningClient = require('lightning-client');
const client = new LightningClient('/root/.lightning/testnet', true);

this.main = function(req, res) {
        let invoiceLabel = req.body.invoiceLabel;

        client.listinvoices(invoiceLabel).then(result => {
                console.log(result);
                res.status(200).json({status : "success", paymentStatus : result.invoices[0].status});
                }).catch(errorResult => {
                        res.status(400).json({ status: "error", error: "No invoice for this label" });
                });
 };
