import { DISCOUNT_MONEY } from "../src/constants/common"
import { PROFIT_HISTORY_DETAIL } from "../src/constants/eventResults"
import DiscountCalculator from "../src/utils/DiscountCalculator"

describe('크리스마스 디데이/특별 이벤트/주말 및 평일 할인 계산 테스트', () => {
  // 크리스마스 디데이 할인 계산 테스트
  test.each([
    [24, [PROFIT_HISTORY_DETAIL.CHRISTMAS_D_DAY_DISCOUNT, DISCOUNT_MONEY.DEFAULT + DISCOUNT_MONEY.CHRISTMAS_INCREASE * 23]],
    [26, [PROFIT_HISTORY_DETAIL.CHRISTMAS_D_DAY_DISCOUNT, DISCOUNT_MONEY.NO_DISCOUNT]]
  ])('크리스마스 디데이 할인 계산 테스트: %i에 방문 -> 할인: %p ', (visitDate, expected) => {
    expect(DiscountCalculator.calculateChristmasDDay(visitDate)).toEqual(expected);
  });

  // 특별 이벤트 할인 계산 테스트
  test.each([
    [3, [PROFIT_HISTORY_DETAIL.SPECIAL_DISCOUNT, DISCOUNT_MONEY.DEFAULT]],
    [5, [PROFIT_HISTORY_DETAIL.SPECIAL_DISCOUNT, DISCOUNT_MONEY.NO_DISCOUNT]]
  ])('특별 이벤트 할인 계산 테스트: %i에 방문 -> 할인: %p', (visitDate, expexted) => {
    expect(DiscountCalculator.calculateSpecialEvent(visitDate)).toEqual(expexted);
  });

  // 주말 및 평일 할인 계산 테스트
  test.each([
    [6, ['양송이수프', '크리스마스파스타', '아이스크림'], [2, 2, 1], [PROFIT_HISTORY_DETAIL.WEEKDAY_DISCOUNT, 2023]],
    [8, ['양송이수프', '바비큐립', '티본스테이크', '레드와인'], [2, 1, 1, 1], [PROFIT_HISTORY_DETAIL.WEEKEND_DISCOUNT, 4046]]
  ])('주말 및 평일 할인 계산 테스트: 방문 일자는 %i, 주문 메뉴는 %p, 주문 개수는 %p', (visitDate, orderedMenu, orderedMenuCount, expected) => {
    expect(DiscountCalculator.calculateDiscountBasedOnDay(visitDate, orderedMenu, orderedMenuCount)).toEqual(expected);
  })
})