import express from 'express';
const router = express.Router();

let slots = [
  { id: 1, status: 'available' },
  { id: 2, status: 'available' },
  { id: 3, status: 'booked' }
];

router.get('/slots', (req, res) => {
  res.json(slots);
});

router.post('/slots/book', (req, res) => {
  const slotId = req.body.id;
  const slot = slots.find(s => s.id === slotId);

  if (slot && slot.status === 'available') {
    slot.status = 'booked';
    res.status(200).json({ message: 'Slot booked successfully', slot });
  } else {
    res.status(400).json({ message: 'Slot not available or already booked' });
  }
});

export default router;