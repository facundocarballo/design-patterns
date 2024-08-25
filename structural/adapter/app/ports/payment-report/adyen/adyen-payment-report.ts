import { AdyenDeposit } from "./adyen-deposit";

export class AdyenPaymentReport {
  constructor(
    public date: string,
    public file: string,
    public deposit: AdyenDeposit
  ) {}
}
