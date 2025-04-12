import * as userService from './user.service.js';
import { asyncWrapper } from '../lib/utils.js';

export const createUser = asyncWrapper(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Username and Password are required',
    });
  };

  const existingUser = await userService.findUserByUsername(username);
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: 'Username already exists',
    });
  };
  
  const newUser = await userService.createNewUser(req.body);
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: {
      user: newUser,
    },
  });
});

export const loginUser = asyncWrapper(async (req, res) => {  
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and Password are required",
    });
  }

  try {
    //Authenticate thr user
    const { user, token } = await userService.loginUser(username, password);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});