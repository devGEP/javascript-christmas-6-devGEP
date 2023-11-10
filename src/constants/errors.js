import { ERROR_TAG, ENTER_AGAIN } from './common.js';

export class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export const COMMON = {
  DATE: '날짜',
  ORDER: '주문',
};

export const ERROR_REASON = {
  MENU_COUNT: '메뉴의 개수가 없는 것이 있습니다.',
  MENU_NAME: '메뉴의 이름이 없는 것이 있습니다.',
  NOT_INCLUDE_HYPEN: '-이 포함되지 않은 것이 있습니다.',
  MENU_IS_NOT_EXIST: '존재하지 않는 메뉴가 있습니다.',
  MENU_HAS_DUPLICATED: '중복된 메뉴가 있습니다.'
}

export const ERROR_MESSAGES = Object.freeze({
  INVALID: (dateOrOrder) => `${ERROR_TAG} 유효하지 않은 ${dateOrOrder}입니다. ${ENTER_AGAIN}`,
  MENU_INVALID: (errorReason) => `${ERROR_TAG} 유효하지 않은 ${COMMON.ORDER}입니다. ${errorReason} ${ENTER_AGAIN}`,
});