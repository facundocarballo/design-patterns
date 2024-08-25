import { Payment } from "#adapter/domain/payment";

export interface PaymentRepository {
  save(payment: Payment): void;
  find(id: string): Payment;
}
