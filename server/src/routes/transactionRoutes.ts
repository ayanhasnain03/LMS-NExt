import express from "express";

import {createStripePaymentIntent, createTransaction, listTransactions} from "../controllers/transactionController";

const router = express.Router();
router.get("/", listTransactions);
router.post("/stripe/payment-intent",createStripePaymentIntent)
router.post("/", createTransaction);
export default router;
