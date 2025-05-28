const express = require('express');
const app = express();
const port = 3000;

// middleware per il parsing del body delle richieste
app.use(express.json());

// middleware per gli asset statici
app.use(express.static('public'));

// importo router
const postRouter = require('./routers/posts');

// rotte
app.use('/posts', postRouter);

app.get('/', (req, res) => {
    console.log('server del mio blog');
    res.send('benvenuto nel mio blog');
});

app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`);
});


