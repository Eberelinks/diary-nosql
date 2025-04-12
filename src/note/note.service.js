import Note from "./note.schema.js";

export const createNewNote = async (userId, title, content) => {
  const newNote = new Note({
    userId, //Associate note with the user
    title, 
    content
  });

  return await newNote.save();
};

export const getAllNotes = async () => {
  const notes = await Note.find();
  return notes;
};

export const getCompletedNotes = async () => {
  const notes = await Note.find({ status: "completed" });
  return notes;
};

export const getActiveNotes = async () => {
  const notes = await Note.find({ status: active });
  return notes;
};

export const getNoteById = async (noteId) => {
  const note = await Note.findById(noteId);
  return note;
};

export const updateNoteById = async (noteId, payload) => {
  const note = await Note.findByIdAndUpdate(noteId, payload, { new: true });
  return note;
};

export const deleteNoteById = async (noteId) => {
  const note = await Note.findByIdAndDelete(noteId);
  return note;
};