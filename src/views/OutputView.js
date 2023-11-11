import { RESTAURANT_MESSAGES } from "../constants/messages.js";
import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printWelcomeMessage() {
    Console.print(RESTAURANT_MESSAGES.WELCOME_MESSAGE);
  }
}

export default OutputView;