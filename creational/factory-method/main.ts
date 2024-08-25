import { SellProductUseCase } from "./app/sell-product/sell-product";
import { SellProductUseCaseInput } from "./app/sell-product/sell-product.input";
import { CourseFactory } from "./domain/product/course/course-factory";
import { MentorshipFactory } from "./domain/product/mentorship/mentorship-factory";

function main() {
  const courseFactory = new CourseFactory();
  const mentorshipFactory = new MentorshipFactory();

  const firstInput = new SellProductUseCaseInput(
    courseFactory,
    10,
    300,
    "Pattern Desing Course",
    "Code"
  );
  const secondInput = new SellProductUseCaseInput(
    mentorshipFactory,
    25,
    2,
    "Backend mentoship",
    "Code"
  );

  const sellProductUseCase = new SellProductUseCase();

  sellProductUseCase.execute(firstInput);
  sellProductUseCase.execute(secondInput);
}

main();
