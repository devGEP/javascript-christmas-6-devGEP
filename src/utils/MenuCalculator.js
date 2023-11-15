class MenuCalculator {
  static compareAndCalculateMenuPrice(menus, orderedMenuName, orderedMenuCount) {
    const menuName = Object.values(menus).map((menu) => menu.name);
    const menuPrice = Object.values(menus).map((menu) => menu.money);

    if (menuName.includes(orderedMenuName)) {
      return menuPrice[menuName.indexOf(orderedMenuName)] * orderedMenuCount;
    }
    return 0;
  }

  static compareMenuAndOrderedMenu(menus, orderedMenuName, orderedMenuCount) {
    const menuName = Object.values(menus).map((menu) => menu.name);

    if (menuName.includes(orderedMenuName)) {
      return Number(orderedMenuCount);
    }
    return 0;
  }
  
}

export default MenuCalculator;