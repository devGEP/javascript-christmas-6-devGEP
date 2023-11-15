import OrderMenuManager from '../src/models/OrderMenuManager.js';
import MenuCalculator from '../src/utils/MenuCalculator.js';
import { MAIN_MENU } from '../src/constants/menus';

describe('주문받은 메뉴 관련 테스트', () => {
  test('주문 메뉴가 문자열로 입력되고, 이를 메뉴 이름과 수량으로 리턴해야 된다.', () => {
    // given
    const orderMenu = '해산물파스타-2, 제로콜라-1';

    // when
    const [orderedMenuNames, orderedMenuCounts] = OrderMenuManager.processOrderMenu(orderMenu);

    // then
    expect(orderedMenuNames).toEqual(['해산물파스타', '제로콜라']);
    expect(orderedMenuCounts).toEqual(['2', '1']);
  });

  test('메뉴가 입력되면, 메뉴판과 비교하여 해당 메뉴의 가격을 메뉴 수량과 곱해서 예상 가격을 출력한다.', () => {
    // given
    const menuName = '티본스테이크';
    const menuCount = 2;

    // when
    const calculatedPrice = MenuCalculator.compareAndCalculateMenuPrice(MAIN_MENU, menuName, menuCount);

    // then
    const expectedPrice = MAIN_MENU.T_BONE_STEAK.money * menuCount;
    expect(calculatedPrice).toEqual(expectedPrice);
  });
})