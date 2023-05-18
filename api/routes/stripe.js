const router = require("express").Router();
//for some reason it only works when i add the key here!!
const KEY = process.env.STRIPE_KEY
// const KEY = "sk_test_51N7E8BLviwZsSHm3fuBrKXJmarca69ahDE0xlbdjwBp5brZFtiFYn6Epfm4uGSGCSw7V4nqvFPtoi4RIWjcY0lla00oCb6A73B"
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;