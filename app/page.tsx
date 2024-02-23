"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { InvoicesTable } from "@/components/invoicesList";

export default function Home() {
    const [email, setEmail] = useState("");
    const [invoiceList, setInvoiceList] = useState([]);

    const handleSubmit = async () => {
        const response = await fetch("/api/get-invoices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const { invoices } = await response.json();
        setInvoiceList(invoices || []);
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-8 container">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Generate stripe invoices in seconds for &nbsp;
                    <code className="font-mono font-bold">FREE</code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-36 w-full items-end justify-center dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By <h2 className="text-xl">Vlad</h2>
                    </a>
                </div>
            </div>

            <div className="relative flex place-items-center py-12">
                <p className="text-4xl font-bold  dark:text-black">
                    Soloinvoice
                </p>
            </div>
            <div className="relative flex flex-col place-items-center py-12">
                <p className="flex w-full max-w-sm items-center space-x-2 my-8">
                    Enter the email linked to the stripe account, you want to
                    get the invoices for.
                </p>

                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                        type="email"
                        placeholder="Please enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        Get invoices
                    </Button>
                </div>
            </div>
            <div className="flex w-full  items-center space-x-2 my-12">
                <InvoicesTable invoiceList={invoiceList} />
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
        </main>
    );
}
