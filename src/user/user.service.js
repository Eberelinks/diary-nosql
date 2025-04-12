import User from "./user.schema.js";
// import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../lib/config.js";

export const createNewUser = async (payload) => {
  // const userId = uuidv4();
  const { username, password } = payload
  const newUser = new User({ username, password });

  return await newUser.save();
} ;

export const findUserByUsername = async (username) => {
  const user = await User.findOne({ username });

  return user;
};

export const loginUser = async (username, password) => {
  if (!username || !password) {
    throw new Error("Username and Password are required");
  }
  
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ id: user._id }, config.getOrThrow("JWT_SECRET"), { expiresIn: "2h"});

  return { user, token };
};

