import { Invoice } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: any, _res: NextResponse) {
    if (!process.env.STRIPE_SECRET_KEY) {
        console.log("returning error");
        return NextResponse.json(
            { error: "Please add stripe API key to the .env variables." },
            { status: 500 },
        );
    }

    const { email } = await req.json();

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    try {
        //This returns all the customer it could be on or many with the same email
        const response = await stripe.customers.search({
            query: `email:"${email}"`,
        });

        if (response.data.length === 0) {
            return NextResponse.json({ error: "No customer found" });
        }

        let allPaidInvoices: any = [];

        // Iterate over each customer found to get the invoices.
        for (const customer of response.data) {
            const invoices = await stripe.invoices.list({
                customer: customer.id,
                limit: 5,
            });

            const paidInvoices = invoices.data.filter(
                (invoice: Invoice) => invoice.status === "paid",
            );

            allPaidInvoices = allPaidInvoices.concat(paidInvoices);
        }

        return NextResponse.json({ invoices: allPaidInvoices });
    } catch (err) {
        return NextResponse.json({ error: "Error fetching invoices" });
    }
}
