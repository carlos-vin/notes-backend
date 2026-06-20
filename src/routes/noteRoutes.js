const { Router } = require('express');
const NoteController = require('../controllers/noteController');

const router = Router();

router.post('/notes', NoteController.create);// rota para criar
router.get('/notes', NoteController.index);//rota para listar todas

module.exports = router;