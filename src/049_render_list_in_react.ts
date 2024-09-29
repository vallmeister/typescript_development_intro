/* get rid of components files except App.tsx */
import * as React from "react";

interface IInvoiceListProps {
    invoiceData: {
    customerName: string;
    invoices: {id: number, name: string, total: string}[];
    };
    logo?: string;
}

type InvoiceType = {
    id: number;
    name: string;
    total: string;
    paymentStatus: "paid" | "pending";
}

const InvoiceList = (props: IInvoiceListProps) => {
    const {customerName, invoices} = props.invoiceData;
    // use jsx which looks like HTML
    return <div>
        <h1>{customerName}</h1>
        <hr />
        <div>
        {invoices.map((invoice) => (
            <div key={invoice.id}>{invoice.name}</div>))}
        </div>
    </div>
}

const App = () => {
    const data = {
        customerName: "Google",
        invoices: [
            {id: 123, name: "Dev work", total: "20.00"}
            {id: 456, name: "More dev work", total: "50.00"}
            {id: 789, name: "Something different", total: "100.00"}
        ]
    }
    return (
        <div>
        <InvoiceList invoiceData={data} />
        </div>
    );
};

export default App
