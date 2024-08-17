import { Product } from "./product";

export interface ProductFactory {
  create(
    pricePerHour: number,
    hours: number,
    name: string,
    type: string
  ): Product;
}
