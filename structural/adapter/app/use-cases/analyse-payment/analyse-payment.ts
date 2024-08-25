import { PaymentRepository } from "#adapter/infrastructure/repositories/payment-repository";
import { AnalysePaymentUseCaseInput } from "./analyse-payment.input";

export class AnalysePaymentUseCase {
  constructor(private paymentRepository: PaymentRepository) {}

  public execute(input: AnalysePaymentUseCaseInput) {
    console.log("AnalysePaymentUseCase...");
    console.log(input);
    this.paymentRepository.save(input.payment);
  }
}
