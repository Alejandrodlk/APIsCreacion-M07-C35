const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesControler');

/* /api/movies */
router
    .get('/', moviesController.list)
    .get('/new', moviesController.new)
    .get('/recommended', moviesController.recomended)
    .get('/:id', moviesController.detail)
    .post('/', moviesController.create)  // en este caso el verbo POST indica la accion "crear"
    .put('/:id?', moviesController.update)
    .delete('/:id?', moviesController.destroy)

module.exports = router;