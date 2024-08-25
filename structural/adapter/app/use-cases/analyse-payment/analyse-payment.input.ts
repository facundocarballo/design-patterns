import { Payment } from "#adapter/domain/payment";
import { Provider } from "#adapter/domain/provider";

export class AnalysePaymentUseCaseInput {
  constructor(public provider: Provider, public payment: Payment) {}
}
