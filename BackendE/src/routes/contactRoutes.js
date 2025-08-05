// routes/authRoutes.js
import express from 'express';
import Contact from '../models/Contact.js';
import validateContactForm from '../middleware/authContact.js';

const router = express.Router();

router.post('/', validateContactForm, async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;
    const newContact = new Contact({ name, email, mobile, message });
    await newContact.save();
    res.status(201).json({ msg: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;
