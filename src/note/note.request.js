import Joi from "joi";

export const createNoteSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Title is required",
  }),
  content: Joi.string().required().messages({
    "string.empty": "Content is required",
  }),
});

export const updateNoteSchema = Joi.object({
  title: Joi.string().optional(),
  content: Joi.string().optional(),
  status: Joi.string().valid("active", "completed").optional(),
});