import express from 'express';
const router = express.Router();

let payments = [];

router.post('/payments', (req, res) => {
  const { challanId, amountPaid, paymentMethod } = req.body;
  const payment = {
    id: payments.length + 1,
    challanId,
    amountPaid,
    paymentMethod,
    paidAt: new Date()
  };

  payments.push(payment);
  res.status(201).json({ message: 'Payment processed successfully', payment });
});

router.get('/payments/status', (req, res) => {
  res.json(payments);
});

export default router;
