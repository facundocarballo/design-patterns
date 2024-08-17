import { Course } from "./course-product";
import { ProductFactory } from "../product-factory";
import { Product } from "../product";

export class CourseFactory implements ProductFactory {
  public create(
    pricePerHour: number,
    hours: number,
    name: string,
    type: string
  ): Product {
    return new Course(pricePerHour, hours, name, type);
  }
}
