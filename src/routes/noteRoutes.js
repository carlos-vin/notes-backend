const { Router } = require('express');
const NoteController = require('../controllers/noteController');

const router = Router();

router.post('/notes', NoteController.create);
router.get('/notes', NoteController.index);
router.delete('/notes/:id', NoteController.delete);

module.exports = router;