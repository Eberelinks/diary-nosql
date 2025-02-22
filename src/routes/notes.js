import { Router } from "express";
import {
  createNote,
  deleteNoteById,
  getActiveNotes,
  getAllNotes,
  getCompletedNotes,
  getNoteById,
  updateNoteById
} from "../note/note.controller.js";

const router = Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.get("/completed", getCompletedNotes);
router.get("/active", getActiveNotes);
router.post("/", createNote);
router.put("/", updateNoteById);
router.delete("/", deleteNoteById);

export const noteRouter = router;






