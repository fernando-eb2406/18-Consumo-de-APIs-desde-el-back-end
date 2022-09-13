const express = require('express');
const router = express.Router();
const genresControllerAPI = require('../../controllers/api/genresControllerAPI');

/* RUTA /api/genres */
router.get('/', genresControllerAPI.list);
router.get('/:id', genresControllerAPI.detail);
router.get('/:id/movies', genresControllerAPI.genreMovies);

module.exports = router;
