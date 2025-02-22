import * as noteService from "./note.service.js";
import { asyncWrapper } from "../lib/utils.js";

export const createNote = asyncWrapper(async (req, res) => {
  const newNote = await noteService.createNewNote(req.body);
  res.status(201).json({
    success: true,
    message: "Note created successfully",
    data: {
      note: newNote,
    },
  });
});

export const getAllNotes = asyncWrapper(async (req, res) => {
  const notes = await noteService.getAllNotes();
  res.status(200).json({
    success: true,
    message: "All notes fetched successfully",
    data: {
      notes,
    },
  });
});

export const getNoteById = asyncWrapper(async (req, res) => {
  const note = await noteService.getNoteById(req.params.id);
  res.status(200).json({
    success: true,
    message: "Note fetched successfully",
    data: {
      note,
    },
  });
});

export const getCompletedNotes = asyncWrapper(async (req, res) => {
  const notes = await noteService.getCompletedNotes();
  res.status(200).json({
    success: true,
    message: "All completed notes fetched successfully",
    data: {
      notes,
    },
  });
});

export const getActiveNotes = asyncWrapper(async (req, res) => {
  const notes = await noteService.getActiveNotes();
  res.status(200).json({
    success: true,
    message: "All active notes fetched successfully",
    data: {
      notes,
    },
  });
});

export const updateNoteById = asyncWrapper(async (req, res) => {
  const updatedNote = await noteService.updateNoteById(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    data: {
      note: updatedNote,
    },
  });
});

export const deleteNoteById = asyncWrapper(async (req, res) => {
  await noteService.deleteNoteById(req.params.id);
  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
  });
});