const LightningClient = require('lightning-client');
const client = new LightningClient('/root/.lightning/testnet', true);

this.main = function(req, res) {
        let satoshis = parseInt(req.body.amount);
        let label = req.body.label;
        let description = req.body.description;

        client.invoice(satoshis * 1000, label, description).then(result => {
		console.log(result);
                res.status(200).json({status : "success", bolt11 : result["bolt11"]});
                }).catch(errorResult => {
                        res.status(400).json({ status: "error", error: errorResult.error.message });
                });
};
