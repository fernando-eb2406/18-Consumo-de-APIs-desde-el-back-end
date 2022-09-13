const express = require('express');
const router = express.Router();
const actorsControllerAPI = require('../../controllers/api/actorsControllerAPI');

/* RUTA /api/actors */
router.get('/', actorsControllerAPI.list);
router.get('/:id', actorsControllerAPI.detail);
router.get('/:id/movies', actorsControllerAPI.actorMovies);
router.post('/create', actorsControllerAPI.create);
router.put('/update/:id', actorsControllerAPI.update);
router.delete('/delete/:id', actorsControllerAPI.destroy);

module.exports = router;
