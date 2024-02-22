import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { format } from "date-fns";
import { useState } from "react";
import { Button } from "./ui/button";

export function InvoicesTable({ invoiceList }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [invoice, setInvoice] = useState();

    if (invoiceList?.length === 0) {
        return (
            <div className="flex mx-auto">
                <p>No invoices found</p>
            </div>
        );
    }

    const generatePDF = () => {
        const input = document.querySelector("#print-content") as HTMLElement;
        if (input) {
            html2canvas(input, { scale: 2 }).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF({
                    orientation: "portrait",
                });
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                const startPositionY = 20;

                pdf.addImage(
                    imgData,
                    "PNG",
                    0,
                    startPositionY,
                    pdfWidth,
                    pdfHeight,
                );
                pdf.save("invoice.pdf");
            });
        }
    };
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created on</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoiceList?.map((invoice: any) => (
                    <TableRow
                        className="cursor-pointer"
                        key={invoice.id}
                        onClick={() => {
                            setIsOpen(true), setInvoice(invoice);
                        }}
                    >
                        <TableCell className="font-medium">
                            {invoice.number}
                        </TableCell>
                        <TableCell>{invoice.status}</TableCell>
                        <TableCell>
                            {format(new Date(invoice.created * 1000), "PPpp")}
                        </TableCell>
                        <TableCell className="text-right">
                            {invoice.amount_paid}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>

            {invoice && (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent style={{ maxWidth: 800 }}>
                        <DialogHeader></DialogHeader>
                        <DialogTitle>Invoice Details</DialogTitle>
                        <div className="w-full mx-auto p-8" id="print-content">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-xl font-bold">
                                        Invoice {invoice?.number}
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="font-semibold">
                                            BILL TO
                                        </h2>
                                        <p>{invoice?.customer_name}</p>
                                        <p>{invoice?.customer_address.line1}</p>
                                        <p>{invoice?.customer_address.line2}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    {/* @COMPANY LOGO WILL GET IT FROM STRIPE */}
                                    Company Logo
                                    {/* <img
                                            alt="Company Logo"
                                            className="h-16 w-16 inline-block"
                                            height="64"
                                            src="/placeholder.svg"
                                            style={{
                                                aspectRatio: "64/64",
                                                objectFit: "cover",
                                            }}
                                            width="64"
                                        /> */}
                                    <address className="not-italic mt-2">
                                        Company Address
                                    </address>
                                </div>
                            </div>
                            <div className="mt-4  pt-4">
                                <div className="flex justify-between">
                                    <p>Paid on</p>
                                    <p></p>
                                </div>

                                <div className="flex justify-between font-bold">
                                    {format(
                                        new Date(invoice?.created * 1000),
                                        "PPpp",
                                    )}
                                </div>
                            </div>
                            <div className="mt-12">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>DESCRIPTION</TableHead>
                                            <TableHead>QTY</TableHead>
                                            <TableHead>PRICE</TableHead>
                                            <TableHead>TOTAL</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                {invoice?.description}
                                            </TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>
                                                $ {invoice?.amount_paid / 100}
                                            </TableCell>
                                            <TableCell>
                                                $ {invoice?.amount_paid / 100}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>

                            <div className="mt-6 border-t pt-4">
                                <div className="flex justify-between">
                                    <p>SUBTOTAL</p>
                                    <p></p>
                                </div>
                                <div className="flex justify-between">
                                    <p>TAX RATE</p>
                                    <p></p>
                                </div>

                                <div className="flex justify-between font-bold">
                                    <p>TOTAL</p>
                                    <p>${invoice?.amount_paid / 100}</p>
                                </div>
                            </div>
                        </div>
                        <DialogFooter className="sm:justify-end">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => generatePDF()}
                            >
                                Download Invoice
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </Table>
    );
}
