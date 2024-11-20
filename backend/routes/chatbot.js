const express = require('express');

const router = express.Router();

const faqs = [
  { question: 'What are your opening hours?', answer: '8 AM to 10 PM' },
  { question: 'Do you offer delivery?', answer: 'Yes, within 10 km radius' },
];

router.get('/faqs', (req, res) => {
  res.status(200).json(faqs);
});

module.exports = router;
