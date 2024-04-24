const router = require('express').Router();
const movies = require('../controllers/movies.controller');

router.post('/movies', movies.addOne);
router.get("/movies", movies.getAll);
router.get("/movies/:id", movies.getOne);
router.put("/movies/:id", movies.updateOne);
router.delete("/movies/:id", movies.deleteOne);

module.exports = router;