import { Console } from "@woowacourse/mission-utils";

// constants
import { RESTAURANT_MESSAGES } from "../constants/messages.js";

const OutputView = {
  printWelcomeMessage() {
    Console.print(RESTAURANT_MESSAGES.WELCOME_MESSAGE);
  },

  printEventPreviewMessage(visitDate) {
    Console.print(RESTAURANT_MESSAGES.EVENT_PREVIEW_MESSAGE(visitDate));
  }
}

export default OutputView;