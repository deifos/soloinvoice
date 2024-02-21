import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
   
  import { format } from 'date-fns';
   
  export function InvoicesTable({invoiceList}: any) {

    // console.log(invoiceList)
    if(invoiceList?.length === 0) {
        return (
            <div className="flex mx-auto">
                <p >No invoices found</p>
            </div>
        )
    }
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
          {invoiceList?.map((invoice:any) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.number}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{format(new Date(invoice.created *1000), 'PPpp')}</TableCell>
              <TableCell className="text-right">{invoice.amount_paid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }