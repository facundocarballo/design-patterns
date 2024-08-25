import { AdyenDeposit } from "./app/ports/payment-report/adyen/adyen-deposit";
import { AdyenPaymentReport } from "./app/ports/payment-report/adyen/adyen-payment-report";
import { AdyenPaymentReportAdapter } from "./app/ports/payment-report/adyen/adyen-payment-report-adapter";
import { PayPalPaymentReport } from "./app/ports/payment-report/paypal/paypal-payment-report";
import { PayPalPaymentReportAdapter } from "./app/ports/payment-report/paypal/paypal-payment-report-adapter";
import { AnalysePaymentUseCase } from "./app/use-cases/analyse-payment/analyse-payment";
import { AnalysePaymentUseCaseInput } from "./app/use-cases/analyse-payment/analyse-payment.input";
import { Currency } from "./domain/currency";
import { Provider } from "./domain/provider";
import { PaymentMongoDB } from "./infrastructure/services/payment-mongodb";

function main() {
  const paypalPaymentReport = new PayPalPaymentReport(
    "2024-08-25T17:03:48.530Z",
    "paypal-report-batch-369.csv",
    639000,
    Currency.USD
  );
  const adyenPaymentReport = new AdyenPaymentReport(
    "2024-08-25",
    "settlement-details-report-batch-369.csv",
    new AdyenDeposit(639000, Currency.USD)
  );

  const paymentMongoService = new PaymentMongoDB();

  const analysePaymentUseCase = new AnalysePaymentUseCase(paymentMongoService);
  const paypalInput = new AnalysePaymentUseCaseInput(
    Provider.PAYPAL,
    new PayPalPaymentReportAdapter(paypalPaymentReport)
  );
  const adyenInput = new AnalysePaymentUseCaseInput(
    Provider.ADYEN,
    new AdyenPaymentReportAdapter(adyenPaymentReport)
  );

  analysePaymentUseCase.execute(paypalInput);
  analysePaymentUseCase.execute(adyenInput);
}

main();
