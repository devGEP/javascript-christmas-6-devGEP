import InputValidator from '../InputValidator.js';

class OrderMenuUtility {
  static transformInputToMenuArray(orderedMenu) {
    const menuArray = orderedMenu.split(',').map((menu) => menu.trim());

    InputValidator.isOrderedMenuValidated(menuArray);

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

    InputValidator.isMenusValidated(menus, counts);

    return [menus, counts];
  }
}

export default OrderMenuUtility;