import jwt from "jsonwebtoken";
import config from "../lib/config.js";

export const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  try {
    //Verify token
    const decoded = jwt.verify(token, config.getOrThrow("JWT_SECRET"));
    req.user = { _id: decoded.id}; //Attach user ID to the request
    next();
  
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "Invalid token"
    });
  }
}