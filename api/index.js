const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const payload = req.body;

    // Handle the incoming webhook payload
    console.log(payload);

    // Send a response back to Helius API
    res.send('Start!');
});

app.get('/', (req, res) => {
    res.send('Hello from Vercel!')
});

app.post('/webhook', (req, res) => {
    const payload = req.body;

    // Handle the incoming webhook payload
    console.log(payload);

    // Send a response back to Helius API
    res.send('Webhook received!');
});

// const WEBHOOK_URL = 'http://localhost:3000/webhook';

// axios.post('https://api.helius.xyz', {
//   url: WEBHOOK_URL
// }).then(response => {
//   console.log('Webhook registered successfully');
// }).catch(error => {
//   console.error('Error registering webhook');
// });

app.listen(PORT, () => {
    console.log(`Webhook server running on port ${PORT}`);
});

