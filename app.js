const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Route to index page
app.get('/', (req, res) => {
    res.send('It works');
});

const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`Server started on port ${port}`);
});