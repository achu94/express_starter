const express = require('express');

const app = express();
const port = 5001;

app.get('/', (req, res) => {
    res.send('Hello word');
});




app.listen(port, (req, res) => {
    console.log(`Example app listening at http:://localhost:${port}`);
});