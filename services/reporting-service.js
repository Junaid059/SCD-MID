import express from 'express';
import  violations  from './violation-service.js';
import  payments  from './payment-service.js';
const router = express.Router();

router.get('/reports/violations', (req, res) => {
  res.json({ report: 'Violation Report', data: violations });
});

router.get('/reports/payments', (req, res) => {
  res.json({ report: 'Payment Report', data: payments });
});

router.get('/reports/summary', (req, res) => {
  const totalViolations = violations.length;
  const totalPayments = payments.length;
  const totalAmountPaid = payments.reduce((sum, payment) => sum + payment.amountPaid, 0);

  res.json({
    report: 'Summary Report',
    totalViolations,
    totalPayments,
    totalAmountPaid
  });
});

export default router;
