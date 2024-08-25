import { Currency } from "../../domain/currency";
import { Deposit } from "../../domain/deposit";
import { Payment } from "../../domain/payment";
import { PaymentRepository } from "../repositories/payment-repository";

export class PaymentMongoDB implements PaymentRepository {
  public save(payment: Payment): void {
    console.log("Saving the payment in mongodb...");
    console.log(payment);
  }

  public find(id: string): Payment {
    console.log("Finding the payment in mongodb...");
    console.log(id);
    return new Payment(new Date(), "file-name", new Deposit(123, Currency.USD));
  }
}
