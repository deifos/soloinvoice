import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

// import { type StripeCheckoutRequest } from "@/lib/stripe";

export async function POST(req: any, _res: NextResponse) {
    const { email } = await req.json();
  
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");
  
    try {
      const response = await stripe.customers.search({
        query: `email:"${email}"`,
      });
  
      if (response.data.length === 0) {
        return NextResponse.json({ error: "No customer found" });
      }
  
      // Initialize an array to hold all paid invoices
      let allPaidInvoices:any = [];
  
      // Iterate over each customer found
      for (const customer of response.data) {
        const invoices = await stripe.invoices.list({
          customer: customer.id,
          limit: 5,
        });
  
        // Filter invoices by status 'paid'
        const paidInvoices = invoices.data.filter(invoice => invoice.status === 'paid');
  
        // Add these paid invoices to the aggregate array
        allPaidInvoices = allPaidInvoices.concat(paidInvoices);
      }
  
      // Return the list of all paid invoices
      return NextResponse.json({ invoices: allPaidInvoices });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: "Error fetching invoices" });
    }
  }
