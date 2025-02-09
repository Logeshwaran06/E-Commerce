const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const { default: mongoose } = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/ecommerce', err => {
    if(err) throw err;
    console.log('Connected to MongoDB');
})
    
app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.listen(8000, () => {
    console.log('Server is running on port 8000');
})