import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../InputValidator.js";

// models
import MenuCalculator from "../models/MenuCalculator.js";

// constants
import { RESTAURANT_QUESTION } from "../constants/messages.js";

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
  },

  async readOrderMenu() {
    try {
      const orderedMenu = await Console.readLineAsync(RESTAURANT_QUESTION.ASK_MENU);

      const menuArray = MenuCalculator.menuInputToMenuArray(orderedMenu);
      InputValidator.isOrderedMenuValidated(menuArray);
      
      const [menusArray, countsArray] = MenuCalculator.splitMenuArray(menuArray);
      InputValidator.isMenusValidated(menusArray, countsArray);
      
      return [menusArray, countsArray];
    } catch (error) {
      Console.print(error.message);
      return this.readOrderMenu();
    }
  }
}

export default InputView;
