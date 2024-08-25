import { Currency } from "#adapter/domain/currency";

export class AdyenDeposit {
  constructor(public amount: number, public currency: Currency) {}
}
