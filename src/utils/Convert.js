class Convert {
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
}

export default Convert;