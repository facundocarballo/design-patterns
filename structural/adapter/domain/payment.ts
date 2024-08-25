import { Deposit } from "./deposit";

export class Payment {
  constructor(
    public date: Date,
    public fileName: string,
    public deposit: Deposit
  ) {}
}
