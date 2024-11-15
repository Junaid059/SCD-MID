import express from 'express';
const router = express.Router();

let violations = [];

router.get('/violations', (req, res) => {
  res.json(violations);
});

router.post('/violations/report', (req, res) => {
  const { vehicleId, violationType, timestamp } = req.body;
  const violation = {
    id: violations.length + 1,
    vehicleId,
    violationType,
    timestamp: timestamp || new Date()
  };

  violations.push(violation);
  res.status(201).json({ message: 'Violation reported successfully', violation });
});

export default router;
