import Note from "./note.schema.js";

export const createNewNote = async(payload) => {
  const newNote = await Note.create(payload);
  return newNote;
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

export const getNoteById = async (id) => {
  const note = await Note.findById(id);
  return note;
};

export const updateNoteById = async (id, payload) => {
  const note = await Note.findByIdAndUpdate(id, payload, { new: true });
  return note;
};

export const deleteNoteById = async (id) => {
  const note = await Note.findByIdAndDelete(id);
  return note;
};