import { CustomError } from "../constants/errors.js";
import { APPETIZER_MENU, MAIN_MENU, DESSERT_MENU, BEVERAGE_MENU } from "../constants/menus.js";

class MenuValidation {
  static validateMenuLength(orderedMenus, message) {
    if(orderedMenus.includes('')) {
      throw new CustomError(message);
    }
  }

  static validateCountIsNumber(nums, message) {
    nums.forEach(num => {
      if(isNaN(num)) {
        throw new CustomError(message);
      }
    })
  }

  static validateMenuFormatInCludesHypen(orderedMenus, message) {
    orderedMenus.forEach(menu => {
      if(!menu.includes('-')) {
        throw new CustomError(message);
      }
    })
  }

  static validateMenuFormatIncludesMenu(orderedMenus, message) {
    orderedMenus.every(menu => {
      const parts = menu.split('-');
      const menuName = parts[0];
      if (menuName.trim() === '') {
        throw new CustomError(message);
      }
    })
  }

  static validateMenuFormatInCludesCount(orderedMenus, message) {
    orderedMenus.every(menu => {
      const parts = menu.split('-');
      const count = parts[1];
      if (count.trim() === '') {
        throw new CustomError(message);
      }
    })
  }

  static validateMenuCounts(counts, message) {
    counts.forEach(count => {
      if(count < 1) {
        throw new CustomError(message);
      }
    })
  }

  static validateIsInMenu(menus, message) {
    const appetizerNames = Object.values(APPETIZER_MENU).map(menu => menu.name);
    const mainNames = Object.values(MAIN_MENU).map(menu => menu.name);
    const dessertNames = Object.values(DESSERT_MENU).map(menu => menu.name);
    const beverageNames = Object.values(BEVERAGE_MENU).map(menu => menu.name);

    menus.forEach(menu => {
      if(!appetizerNames.includes(menu)&&!mainNames.includes(menu)&&!dessertNames.includes(menu)&&!beverageNames.includes(menu)) {
        throw new CustomError(message);
      }
    }) 
  }

  static validateHasDuplicateMenu(menus, message) {
    const uniqueMenus = new Set(menus);
    if (uniqueMenus.size !== menus.length) {
      throw new CustomError(message);
    }
  }

  static validateAreMoreThanTwentyMenus(counts, message) {
    let totalCounts = 0;
    counts.forEach(count => {
      totalCounts += Number(count);

      if (totalCounts > 20) {
        throw new CustomError(message);
      }
    });
  }
}

export default MenuValidation;