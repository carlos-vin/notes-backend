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

  async findById(id) {
  return await prisma.note.findUnique({
    where: {
      id: Number(id)
    }
  });
}

    async delete(id) {
    return prisma.note.delete({
      where: {
        id: Number(id)
      }
    });
  }
}

module.exports = new NoteRepository();