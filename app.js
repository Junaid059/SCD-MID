import express from 'express';
import parkingService from './services/parking-service.js';
import violationService from './services/violation-service.js';
import challanService from './services/challan-service.js';
import paymentService from './services/payment-service.js';
import reportingService from './services/reporting-service.js';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(parkingService);
app.use(violationService);
app.use(challanService);
app.use(paymentService);
app.use(reportingService);


app.listen(PORT, () => console.log(`E-parking Challan System running on port ${PORT}`));
