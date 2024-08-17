import { Product } from "../product";

export class Mentorship implements Product {
  constructor(
    private pricePerHour: number,
    private hours: number,
    private mentorshipName: string,
    private mentorshipType: string
  ) {}

  price(): number {
    return this.pricePerHour * this.hours;
  }
  name(): string {
    return this.mentorshipName;
  }
  type(): string {
    return this.mentorshipType;
  }
}
