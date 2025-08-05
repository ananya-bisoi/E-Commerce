// middleware/authContact.js
const validateContactForm = (req, res, next) => {
  const { name, email, mobile, message } = req.body;

  if (!name || !email || !mobile || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  next();
};

export default validateContactForm;
