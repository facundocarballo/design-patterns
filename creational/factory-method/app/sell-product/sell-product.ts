import { Product } from "../../domain/product/product";
import { SellProductUseCaseInput } from "./sell-product.input";

export class SellProductUseCase {
  public execute(input: SellProductUseCaseInput) {
    const product = this.getProduct(input);
    console.log("SellProductUseCase receives this product: ", product);
  }

  private getProduct(input: SellProductUseCaseInput): Product {
    const { productFactory, pricePerHour, hours, name, type } = input;
    return productFactory.create(pricePerHour, hours, name, type);
  }
}
