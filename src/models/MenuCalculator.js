class MenuCalculator {
  static menuInputToMenuArray(menuInput) {
    const menuArray = menuInput.split(',').map((menu) => menu.trim());

    return menuArray;
  }

  static splitMenuArray(menuArray) {
    const splitMenuArray = Array.isArray(menuArray) ? menuArray : [menuArray];

    let menus = [];
    let counts = [];

    for(let i = 0; i < splitMenuArray.length; i+= 1) {
      const parts = splitMenuArray[i].split('-');
      
      menus.push(parts[0].trim());
      counts.push(parts[1].trim());
    }

    return [menus, counts];
  }

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