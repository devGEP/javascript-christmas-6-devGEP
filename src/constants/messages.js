import { EVENT_MONTH } from './common.js';

export const RESTAURANT_MESSAGES = Object.freeze({
  WELCOME_MESSAGE: `안녕하세요! 우테코 식당 ${EVENT_MONTH} 이벤트 플래너입니다.`,
  EVENT_PREVIEW_MESSAGE: (date) => `${EVENT_MONTH} ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
});

export const RESTAURANT_QUESTION = Object.freeze({
  ASK_VISIT_DATE: `${EVENT_MONTH} 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해주세요!)`,
  ASK_MENU: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
});