import { MAIN_MENU } from "../src/constants/menus";
import MenuCalculator from "../src/utils/MenuCalculator";

describe('메뉴 관련 계산 테스트', () => {
  test('메뉴가 입력되면, 해당 메뉴의 가격을 메뉴 수량을 곱해서 예상 가격을 출력한다.', () => {
    // given
    const menuName = '티본스테이크';
    const menuCount = 2;

    // when
    const calculatedPrice = MenuCalculator.compareAndCalculateMenuPrice(MAIN_MENU, menuName, menuCount);

    // then
    const expectedPrice = MAIN_MENU.T_BONE_STEAK.money * menuCount;
    expect(calculatedPrice).toEqual(expectedPrice);
  })
})