const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

// Rotta index (tutti i post)
router.get('/', postController.index);

// Rotta show (singolo post)
router.get('/:id', postController.show);


// Rotta destroy (eliminazione post)
router.delete('/:id', postController.destroy);

module.exports = router;