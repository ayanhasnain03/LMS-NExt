import express from "express";

import {createStripePayment} from "../controllers/transactionController";

const router = express.Router();

router.post("/stripe/payment-intent",createStripePayment)

export default router;
