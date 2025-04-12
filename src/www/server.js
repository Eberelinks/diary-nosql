import express from "express";
import { createServer } from "http";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { noteRouter } from "../routes/notes.js";
import { userRouter } from "../routes/user.js";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "The application is up and running!"
  });
});

app.use("/api/v1/notes", noteRouter);
app.use("/api/v1/users", userRouter);

export { app, server };