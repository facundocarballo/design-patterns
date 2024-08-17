import { Product } from "../product";

export class Course implements Product {
  constructor(
    private pricePerHour: number,
    private hours: number,
    private courseName: string,
    private courseType: string
  ) {}

  public price(): number {
    return this.pricePerHour * this.hours;
  }
  public name(): string {
    return this.courseName;
  }
  public type(): string {
    return this.courseType;
  }
}
