import { Deposit } from "../../../../domain/deposit";
import { AdyenPaymentReport } from "./adyen-payment-report";

export class AdyenPaymentReportAdapter {
  public date: Date;
  public fileName: string;
  public deposit: Deposit;

  constructor(adyenPayment: AdyenPaymentReport) {
    this.date = new Date(adyenPayment.date);
    this.fileName = adyenPayment.file;
    this.deposit = new Deposit(
      adyenPayment.deposit.amount,
      adyenPayment.deposit.currency
    );
  }
}
