const NoteRepository = require('../repositories/noteRepository');

class NoteService {
    async createNote({titulo, texto}) {
        if(!titulo || !texto) {
            throw new error('titulo e texto sao obrigatorios.');
        }
        return await NoteRepository.create(titulo, texto);
    }
    async getAllNotes() {
        return await NoteRepository.findAll();
    }
}

module.exports = new NoteService();