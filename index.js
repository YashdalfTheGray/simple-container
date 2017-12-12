require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.json({
        server: 'echo-chamber',
        status: 'ok',
        method: req.method,
        message: 'GET /get to echo back query params and POST to /post to echo back request body.'
    });
});

app.get('/get', (req, res) => {
    res.json({
        server: 'echo-chamber',
        status: 'ok',
        method: 'GET',
        queryParams: req.query
    });
});

app.post('/post', (req, res) => {
    res.json({
        server: 'echo-chamber',
        status: 'ok',
        method: 'POST',
        requestBody: req.body
    });
});

app.get('/env', (req, res) => {
    const { TEST_VAR, ANOTHER_TEST_VAR, STRING_TEST_VAR } = process.env;
    res.json({ TEST_VAR, ANOTHER_TEST_VAR, STRING_TEST_VAR });
});


app.listen(8080, () => console.log('Server now running at port 8080'));
