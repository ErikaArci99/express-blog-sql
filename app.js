// console.log('Hello World')

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('server del mio blog')
    res.send('benvenuto nel mio blog')
});

app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`)
});