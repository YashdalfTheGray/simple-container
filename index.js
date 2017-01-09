const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

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


app.listen(8080, () => console.log('Server now running at port 8080'));
