const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('YOUR_SECRET_KEY');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/charge', async (req, res) => {
    const token = req.body.stripeToken;
    const charge = await stripe.charges.create({
        amount: 1000,
        currency: 'usd',
        description: 'Example charge',
        source: token,
    });
    res.send('تمت عملية الدفع بنجاح');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
