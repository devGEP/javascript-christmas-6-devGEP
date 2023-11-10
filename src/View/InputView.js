import { Console } from "@woowacourse/mission-utils";
import { RESTAURANT_QUESTION } from "../constants/messages.js";

const InputView = {
  async readVisitDate() {
    try {
      const input = await Console.readLineAsync(RESTAURANT_QUESTION.ASK_VISIT_DATE);
      return input;
    } catch (error) {
      Console.print(error.message);
      return this.readVisitDate();
    }
  }
  // ...
}

export default InputView;
