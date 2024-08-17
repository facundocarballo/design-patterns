import { ProductFactory } from "../../domain/product/product-factory";

export class SellProductUseCaseInput {
  constructor(
    public productFactory: ProductFactory,
    public pricePerHour: number,
    public hours: number,
    public name: string,
    public type: string
  ) {}
}
