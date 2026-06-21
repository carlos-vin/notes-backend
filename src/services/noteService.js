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

    async delete(id) {
    const note = await NoteRepository.findById(id);

    if (!note) {
      throw new Error("Nota não encontrada");
    }

    return NoteRepository.delete(id);
  }
}

module.exports = new NoteService();