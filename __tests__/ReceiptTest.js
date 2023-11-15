import { DECEMBER_EVENT_BADGE, PROFIT_HISTORY_DETAIL } from "../src/constants/eventResults.js";
import { MAIN_MENU } from "../src/constants/menus.js";
import ReceiptCalculator from "../src/utils/ReceiptCalculator.js";

describe('영수증 관련 테스트', () => {
  test('할인되기 전에 입력된 메뉴의 총주문 가격을 출력해야 한다.', () => {
    // given
    const orderedMenuNames = ['티본스테이크', '바비큐립'];
    const orderedMenuCounts = [1, 1];

    // when
    const totalPrice = ReceiptCalculator.calculateBeforeDiscountAmount(orderedMenuNames, orderedMenuCounts);

    // then
    const expectedTotalPrice = MAIN_MENU.T_BONE_STEAK.money * 1 + MAIN_MENU.BARBECUE_RIBS.money * 1;
    expect(totalPrice).toEqual(expectedTotalPrice);
  });

  test('할인 전 금액에서 할인 금액을 뺀 가격을 계산해서, 할인 후 총주문 금액을 출력해야 한다.', () => {
    // given
    const beforePrice = 100000;
    const profitHistoryPrice = [[PROFIT_HISTORY_DETAIL.CHRISTMAS_D_DAY_DISCOUNT, 1200],
                                [PROFIT_HISTORY_DETAIL.WEEKDAY_DISCOUNT, 2023],
                                [PROFIT_HISTORY_DETAIL.SPECIAL_DISCOUNT, 1000]]

    // when
    const afterDiscountAmount = ReceiptCalculator.calculateAfterDiscountAmount(beforePrice, profitHistoryPrice);

    // then
    const expectedAfterDiscountAmount = 100000 - 4223;
    expect(afterDiscountAmount).toEqual(expectedAfterDiscountAmount);
  })

  test('총 혜택 금액에 따라 적절한 이벤트 배지를 결정해야 한다.', () => {
    // given
    const totalProfitPrice = 17000;

    // when
    const badge = ReceiptCalculator.determineEventBadge(totalProfitPrice);

    // then
    expect(badge).toEqual(DECEMBER_EVENT_BADGE.MORE_THAN_TEN_THOUSAND);
  });
})