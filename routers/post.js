const express = require('express');
const router = express.Router();

//rotte crud per i post

//rotta index
router.get('/posts', (req, res) => {
    console.log('elenco post')
})

//rotta dettaglio
router.get('/posts:id', (req, res) => {
    console.log('post con id' + req.params.id)
    res.send('dettaglio post')
})

module.exports = router;  //esportazione router