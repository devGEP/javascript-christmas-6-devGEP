import { Console } from "@woowacourse/mission-utils";

// constants
import { RESTAURANT_MESSAGES } from "../constants/messages.js";
import { RESULT_FORMATS } from "../constants/eventResults.js";

const OutputView = {
  printWelcomeMessage() {
    Console.print(RESTAURANT_MESSAGES.WELCOME_MESSAGE);
  },

  printEventPreviewMessage(visitDate) {
    Console.print(RESTAURANT_MESSAGES.EVENT_PREVIEW_MESSAGE(visitDate));
  },

  printReceiptTitle(title) {
    Console.print(title);
  },

  printOrderedMenu(name, count) {
    Console.print(RESULT_FORMATS.MENU(name, count));
  },

  printTotalPrice(price) {
    Console.print(RESULT_FORMATS.PRICE(price));
  },

  printProfitHistoryDetail(profit, price) {
    if (price === 0 || price === undefined) {
      return;
    }
    Console.print(RESULT_FORMATS.DISCOUNT(profit, price));
  }
}

export default OutputView;