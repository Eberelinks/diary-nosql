import { Router } from 'express';
import  { validateMiddleware } from '../middleware/valid.middleware.js';
import { registerUserSchema, loginUserSchema } from '../user/user.request.js';
import { createUser, loginUser } from '../user/user.controller.js';

const router = Router();

router.post('/register', validateMiddleware(registerUserSchema), createUser);
router.post('/login', validateMiddleware(loginUserSchema), loginUser);

export const userRouter = router; 