export const RECEIPT_TITLE = Object.freeze({
  ORDER_MENU: '<주문 메뉴>',
  BEFORE_DISCOUNT_TOTAL_PRICE: '\n<할인 전 총주문 금액>',
  GIFT_MENU: '\n<증정 메뉴>',
  PROFIT_HISTORY: '\n<혜택 내역>',
  TOTAL_PROFIT_PRICE: '\n<총혜택 금액>',
  AFTER_DISCOUNT_TOTAL_PRICE: '\n<할인 후 예상 결제 금액>',
  EVENT_BADGE: '\n<12월 이벤트 배지>'
});

export const PROFIT_HISTORY_DETAIL = Object.freeze({
  CHRISTMAS_D_DAY_DISCOUNT: '크리스마스 디데이 할인',
  WEEKDAY_DISCOUNT: '평일 할인',
  WEEKEND_DISCOUNT: '주말 할인',
  SPECIAL_DISCOUNT: '특별 할인',
  GIFT_EVENT: '증정 이벤트'
});

export const RESULT_FORMATS = Object.freeze({
  MENU: (menu, count) => `${menu} ${count}개`,
  PRICE: (price) => `${price.toLocaleString()}원`,
  DISCOUNT: (profit, price) => `${profit}: -${RESULT_FORMATS.PRICE(price.toLocaleString())}`,
  TOTAL_DISCOUNT: (price) => `-${RESULT_FORMATS.PRICE(price.toLocaleString())}`
})