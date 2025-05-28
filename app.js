// console.log('Hello World')

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('server del mio blog')
    res.send('benvenuto nel mio blog')
});

//importo router
const postRouter = require('./routers/post')

app.use('/post', postRouter);

app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`)
});

//middleware per gli asset statici
app.use(express.static('public'));

//middelware per il parsing del body delle richieste
app.use(express.json());

