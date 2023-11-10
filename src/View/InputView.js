import { Console } from "@woowacourse/mission-utils";
import { RESTAURANT_QUESTION } from "../constants/messages.js";
import InputValidator from "../InputValidator.js";

const InputView = {
  async readVisitDate() {
    try {
      const visitDate = await Console.readLineAsync(RESTAURANT_QUESTION.ASK_VISIT_DATE);
      InputValidator.isVisitDateValidated(visitDate);

      return visitDate;
    } catch (error) {
      Console.print(error.message);
      return this.readVisitDate();
    }
  }
  // ...
}

export default InputView;
