import express from 'express';
const router = express.Router();

let challans = [];

router.post('/challans', (req, res) => {
  const { vehicleId, violationType, amount } = req.body;
  const challan = {
    id: challans.length + 1,
    vehicleId,
    violationType,
    amount,
    issuedAt: new Date()
  };

  challans.push(challan);
  res.status(201).json({ message: 'Challan generated successfully', challan });
});

router.get('/challans', (req, res) => {
  res.json(challans);
});

export default router;
