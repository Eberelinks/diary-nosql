import { Schema, model } from "mongoose";

const noteSchema = new Schema({
  userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
  
  
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

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  }

}, { timeStamps: true});

const Note = model("Note", noteSchema);
export default Note; // export the model