/* get rid of components files except App.tsx */
import * as React from "react";

interface IInvoiceListProps {
    invoiceData: {
    customerName: string;
    invoices: {id: number, name: string, total: string}[];
    };
    logo?: string;
}

const InvoiceList = (props: IInvoiceListProps) => {
    const {customerName, invoices} = props.invoiceData;
    // use jsx which looks like HTML
    return <div>
        <h1>Invoices...</h1>
        <h2>Something else</h2>
        <h2>{props.invoiceData.customerName}</h2>
        <h2>{customerName}</h2>
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
