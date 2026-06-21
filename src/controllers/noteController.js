const NoteService = require('../services/noteService');

class NoteController {
    async create(req, res) {
        try {
            const { titulo, texto } = req.body;
            const newNote = await NoteService.createNote({ titulo, texto});
            return res.status(201).json(newNote);
        } catch(error) {
            return res.status(400).json({ error: error.message});
        }
    }
    async index(req, res){
        try {
            const notes = await NoteService.getAllNotes();
            return res.json(notes);
        } catch (error) {
            return res.status(500).json({ error: 'erro ao buscar notas.' });
        }
    }

    async delete(req, res) {
    try {
      await NoteService.delete(req.params.id);

      res.status(200).json({
        message: "Nota deletada com sucesso"
      });
    } catch (error) {
      res.status(404).json({
        error: error.message
      });
    }
  }
}

module.exports = new NoteController();