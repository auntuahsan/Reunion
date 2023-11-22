const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

router.post('/stripe-checkout', function (req, res) {
    console.log(req.body)
})

router.post('/create-checkout-session', async (req, res) => {
    console.log(req.body.amount)
    let amount = Number(req.body.amount) * 100
    let price = await stripe.prices.create({
        unit_amount: amount,
        currency: 'usd',
        product: 'prod_P36as0HseZHWLC',
    })

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: price.id,
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `https://josephites-crossians.org?success=true`,
        cancel_url: `https://josephites-crossians.org/checkout?cancel=true`,
    });
    console.log(session)
    res.json(session)
    //res.redirect(303, session.url);
});

module.exports = router