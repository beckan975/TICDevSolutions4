require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { bdConnection } = require('./database/config');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

bdConnection();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});