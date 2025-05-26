import Stripe from 'stripe';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

dotenv.config();

const stripeSecret = process.env.STRIPE_SECRET_KEY;
if (!stripeSecret) {
  throw new Error('STRIPE_SECRET_KEY is required in your environment');
}

// Initialize Stripe with your secret key and API version
const stripe = new Stripe(stripeSecret);

export const createStripePayment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Ensure we get a valid amount in rupees; fallback to ₹50
    let { amount } = req.body as { amount?: number };
    if (!amount || amount <= 0) {
      amount = 50;
    }

    // Stripe expects amount in the smallest currency unit (paise)
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
automatic_payment_methods:{
 enabled:true,
 allow_redirects:"never"
}
    });

    // Return the client_secret to the frontend
    res.status(200).json({
  message:"",data:{
   clietSecret: paymentIntent.client_secret
  }
    });
  } catch (err) {
    console.error('Stripe PaymentIntent creation failed:', err);

    // Determine error message
    const message =
      err instanceof Error ? err.message : 'Internal server error';

    res.status(500).json({
      error: message,
    });
  }
};
