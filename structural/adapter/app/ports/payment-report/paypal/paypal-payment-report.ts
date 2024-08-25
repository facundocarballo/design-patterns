import { Currency } from "#adapter/domain/currency";

export class PayPalPaymentReport {
  constructor(
    public date: string,
    public csvFile: string,
    public depositAmount: number,
    public currency: Currency
  ) {}
}
