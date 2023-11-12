import { Console } from "@woowacourse/mission-utils";
import { RESTAURANT_MESSAGES } from "../constants/messages.js";
import { RESULT_FORMATS } from "../constants/eventResults.js";
import { BEVERAGE_MENU } from "../constants/menus.js";
import { GIFT_COUNT, DOESNT_EXIST, DEFAULT_NUM } from "../constants/common.js";

const OutputView = {
  printWelcomeMessage() {
    Console.print(RESTAURANT_MESSAGES.WELCOME_MESSAGE);
  },

  printEventPreviewMessage(visitDate) {
    Console.print(RESTAURANT_MESSAGES.EVENT_PREVIEW_MESSAGE(visitDate));
  },

  printText(text) {
    Console.print(text);
  },

  printOrderedMenu(name, count) {
    Console.print(RESULT_FORMATS.MENU(name, count));
  },

  printTotalPrice(price) {
    Console.print(RESULT_FORMATS.PRICE(price));
  },

  printNoProfitMessage() {
    Console.print(DOESNT_EXIST);
  },

  printGiftMenu(isGiftAvailable) {
    if (isGiftAvailable) {
      Console.print(RESULT_FORMATS.MENU(BEVERAGE_MENU.CHAMPAGNE.name, GIFT_COUNT));
      return;
    }
    this.printNoProfitMessage();
  },

  printProfitHistoryDetail(profit, price) {
    if (price !== DEFAULT_NUM) {
      Console.print(RESULT_FORMATS.DISCOUNT(profit, price));
    }
  },

  printTotalProfitPrice(price) {
    if (price === DEFAULT_NUM) {
      Console.print(RESULT_FORMATS.PRICE(price));
      return;
    }
    Console.print(RESULT_FORMATS.TOTAL_DISCOUNT(price));
  },
}

export default OutputView;