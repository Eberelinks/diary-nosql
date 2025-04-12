import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validateMiddleware } from "../middleware/valid.middleware.js";
import { createNoteSchema, updateNoteSchema } from "../note/note.request.js";
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

router.get("/", authMiddleware, getAllNotes);
router.get("/:id", authMiddleware, getNoteById);
router.get("/completed", authMiddleware, getCompletedNotes);
router.get("/active", authMiddleware, getActiveNotes);
router.post("/create", authMiddleware, validateMiddleware(createNoteSchema), createNote);
router.put("/:id", authMiddleware, validateMiddleware(updateNoteSchema), updateNoteById);
router.delete("/:id", authMiddleware, deleteNoteById);

export const noteRouter = router;






