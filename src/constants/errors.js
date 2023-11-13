import { MAXIMUM_MENU_COUNT, EVENT_DATE } from "./common.js";

export class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export const COMMON = {
  DATE: '날짜',
  ORDER: '주문',
  ERROR_TAG: '[ERROR]',
  ENTER_AGAIN: '다시 입력해 주세요.'
};

export const DATE_ERROR_REASON = {
  NOT_A_NUMBER: '숫자가 아닙니다.',
  NOT_IN_RANGE: `방문하실 날짜는 ${EVENT_DATE.START} 이상 ${EVENT_DATE.END} 이하의 숫자로만 입력해주세요.`
}

export const ORDER_ERROR_REASON = {
  NO_VALUE_ENTERED: '값이 입력되지 않았습니다.',
  MENU_COUNT: '메뉴의 개수가 없는 것이 있습니다.',
  MENU_NAME: '메뉴의 이름이 없는 것이 있습니다.',
  NOT_INCLUDE_HYPEN: '-이 포함되지 않은 것이 있습니다.',
  MENU_IS_NOT_EXIST: '존재하지 않는 메뉴가 있습니다.',
  MENU_HAS_DUPLICATED: '중복된 메뉴가 있습니다.',
  MENU_IS_MORE_THAN_TWENTY: `메뉴는 한번에 최대 ${MAXIMUM_MENU_COUNT}개까지만 입력 가능합니다.`,
}

export const ERROR_MESSAGES = Object.freeze({
  INVALID: (dateOrOrder) => `${COMMON.ERROR_TAG} 유효하지 않은 ${dateOrOrder}입니다. ${COMMON.ENTER_AGAIN}`,
  ORDER_INVALID: (errorReason) => `${COMMON.ERROR_TAG} 유효하지 않은 ${COMMON.ORDER}입니다. ${errorReason} ${COMMON.ENTER_AGAIN}`,
});