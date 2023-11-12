import { Console } from "@woowacourse/mission-utils";

// constants
import { RESTAURANT_MESSAGES } from "../constants/messages.js";
import { RESULT_FORMATS } from "../constants/eventResults.js";
import { BEVERAGE_MENU } from "../constants/menus.js";
import { GIFT_COUNT, DOESNT_EXIST } from "../constants/common.js";

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

  printGiftMenu(giftMenu) {
    if (giftMenu) {
      Console.print(RESULT_FORMATS.MENU(BEVERAGE_MENU.CHAMPAGNE.name, GIFT_COUNT));
      return;
    }
    this.printNoProfitMessage();
  },

  printProfitHistoryDetail(profit, price) {
    if (price === 0 || price === undefined) {
      return;
    }
    Console.print(RESULT_FORMATS.DISCOUNT(profit, price));
  },

  printNoProfitMessage() {
    Console.print(DOESNT_EXIST);
  },

  printTotalProfitPrice(price) {
    Console.print(RESULT_FORMATS.TOTAL_DISCOUNT(price));
  },
}

export default OutputView;