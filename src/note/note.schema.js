
import { Schema, model } from "mongoose";

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  }, 

  content: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["active", "completed"],
    default: "active",
  }, 
}, { timeStamps: true});

const Note = model("Note", noteSchema);
export default Note; // export the model