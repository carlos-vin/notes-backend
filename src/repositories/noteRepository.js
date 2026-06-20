const prisma = require('../config/database');

class NoteRepository {
  async create(titulo, texto) {
    return await prisma.note.create({
      data: { titulo, texto }
    });
  }

  async findAll() {
    return await prisma.note.findMany();
  }
}

module.exports = new NoteRepository();