const express = require('express');
const router = express.Router();
const moviesControllerAPI = require('../../controllers/api/moviesControllerAPI');

// RUTA /api/movies
router.get('/', moviesControllerAPI.list);
router.get('/:id', moviesControllerAPI.detail);
router.get('/recomended/:rating', moviesControllerAPI.recomended);
router.post('/create', moviesControllerAPI.create);
router.put('/update/:id', moviesControllerAPI.update);
router.delete('/delete/:id', moviesControllerAPI.destroy);

module.exports = router;
