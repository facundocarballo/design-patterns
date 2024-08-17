import { Mentorship } from "./mentorship-product";
import { ProductFactory } from "../product-factory";
import { Product } from "../product";

export class MentorshipFactory implements ProductFactory {
  create(
    pricePerHour: number,
    hours: number,
    name: string,
    type: string
  ): Product {
    return new Mentorship(pricePerHour, hours, name, type);
  }
}
