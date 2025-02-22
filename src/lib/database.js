import mongoose from "mongoose";
import config from "./config.js";

const initializeDatabase = async () => {
  try {
    await mongoose.connect(config.getOrThrow("MONGODB_URI"));
    console.info("Database is connected");

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default initializeDatabase;