import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { line_items } = request.body;

  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed." });
  }

  if (!line_items) {
    return response.status(400).json({ error: "Price not found." });
  }

  const successUrl = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_PUBLIC_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items,
  });

  return response.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
