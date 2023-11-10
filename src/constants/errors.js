import { ERROR_TAG, ENTER_AGAIN } from './common.js';

export class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export const COMMON = {
  DATE: '날짜',
  ORDER: '주문'
}

export const ERROR_MESSAGES = Object.freeze({
  INVALID: (dateOrOrder) => `${ERROR_TAG} 유효하지 않은 ${dateOrOrder}입니다. ${ENTER_AGAIN}`
});