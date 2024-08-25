import { Deposit } from "../../../../domain/deposit";
import { PayPalPaymentReport } from "./paypal-payment-report";

export class PayPalPaymentReportAdapter {
  public date: Date;
  public fileName: string;
  public deposit: Deposit;

  constructor(paypalPayment: PayPalPaymentReport) {
    this.date = new Date(paypalPayment.date);
    this.fileName = paypalPayment.csvFile;
    this.deposit = new Deposit(
      paypalPayment.depositAmount,
      paypalPayment.currency
    );
  }
}
