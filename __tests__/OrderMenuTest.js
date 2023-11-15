import OrderMenuManager from "../src/models/OrderMenuManager";

describe('주문 메뉴를 배열로 변환 후, 메뉴 이름과 수량으로 리턴하는 테스트', () => {
  test('주문 메뉴가 문자열로 입력되고, 이를 메뉴 이름과 수량으로 리턴해야 된다.', () => {
    // given
    const orderMenu = '해산물파스타-2, 제로콜라-1';

    // when
    const [orderedMenuNames, orderedMenuCounts] = OrderMenuManager.processOrderMenu(orderMenu);

    // then
    expect(orderedMenuNames).toEqual(['해산물파스타', '제로콜라']);
    expect(orderedMenuCounts).toEqual(['2', '1']);
  });
});