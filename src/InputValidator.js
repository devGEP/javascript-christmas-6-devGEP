import VisitDateValidation from "./utils/VisitDateValidation.js";
import MenuValidation from "./utils/MenuValidation.js";
import { ERROR_MESSAGES } from "./constants/messages.js";
import { COMMON, ORDER_ERROR_REASON } from "./constants/errors.js";

class InputValidator {
  static isVisitDateValidated(visitDate) {
    VisitDateValidation.validateInputEmpty(visitDate, ERROR_MESSAGES.INVALID(COMMON.DATE));
    VisitDateValidation.validateIsNumber(visitDate, ERROR_MESSAGES.INVALID(COMMON.DATE));
    VisitDateValidation.validateDateRange(visitDate, ERROR_MESSAGES.INVALID(COMMON.DATE));
  }

  static isOrderedMenuValidated(orderedMenu) {
    MenuValidation.validateMenuLength(orderedMenu, ERROR_MESSAGES.INVALID(COMMON.ORDER));
    MenuValidation.validateMenuFormatInCludesHypen(orderedMenu, ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.NOT_INCLUDE_HYPEN));
    MenuValidation.validateMenuFormatIncludesMenu(orderedMenu, ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_NAME));
    MenuValidation.validateMenuFormatInCludesCount(orderedMenu, ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_COUNT));
  }

  static isMenusValidated(menus, counts) {
    MenuValidation.validateCountIsNumber(counts, ERROR_MESSAGES.INVALID(COMMON.ORDER));
    MenuValidation.validateMenuCounts(counts, ERROR_MESSAGES.INVALID(COMMON.ORDER));
    MenuValidation.validateIsInMenu(menus, ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_IS_NOT_EXIST));
    MenuValidation.validateHasDuplicateMenu(menus, ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_HAS_DUPLICATED));
    MenuValidation.validateAreMoreThanTwentyMenus(counts, ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_IS_MORE_THAN_TWENTY));
  }
}

export default InputValidator;