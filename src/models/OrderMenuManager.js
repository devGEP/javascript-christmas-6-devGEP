import OrderMenuUtility from '../utils/OrderMenuUtility.js';

class OrderMenuManager {
  #menuNames;
  #menuCounts;

  constructor(menuNames = [], menuCounts = []) {
    this.#menuNames = menuNames;
    this.#menuCounts = menuCounts;
  }

  static processOrderMenu(orderedMenu) {
    const menuArray = OrderMenuUtility.transformInputToMenuArray(orderedMenu);
    const [orderMenuNames, orderMenuCounts] = OrderMenuUtility.splitMenuArray(menuArray);

    return [orderMenuNames, orderMenuCounts];
  }

  setOrderedMenu(orderedMenuNames, orderedMenuCounts) {
    this.#menuNames = orderedMenuNames;
    this.#menuCounts = orderedMenuCounts;
  }

  getOrderedMenu() {
    return [this.#menuNames, this.#menuCounts];
  }
}

export default OrderMenuManager;