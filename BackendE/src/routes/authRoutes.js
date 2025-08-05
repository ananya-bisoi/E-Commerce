import express from 'express';
import { register, login } from '../controllers/authController.js';
import { validateRegister, validateLogin } from '../middleware/authValidationLS.js'

const router = express.Router();
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'Lax', // or 'Strict' for higher security
    secure: process.env.NODE_ENV === 'production', // only use HTTPS in production
  });

  res.status(200).json({ message: 'Logged out successfully' });
});

export default router;
