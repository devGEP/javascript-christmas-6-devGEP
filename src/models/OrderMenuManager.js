import OrderMenuTransformer from '../utils/OrderMenuTransformer.js';

class OrderMenuManager {
  #menuNames;
  #menuCounts;

  constructor(menuNames = [], menuCounts = []) {
    this.#menuNames = menuNames;
    this.#menuCounts = menuCounts;
  }

  static processOrderMenu(orderedMenu) {
    const menuArray = OrderMenuTransformer.transformInputToMenuArray(orderedMenu);
    const [orderMenuNames, orderMenuCounts] = OrderMenuTransformer.splitMenuArray(menuArray);

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