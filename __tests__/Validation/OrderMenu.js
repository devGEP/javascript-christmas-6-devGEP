import { ERROR_MESSAGES } from "../../src/constants/messages.js";
import { COMMON, ORDER_ERROR_REASON } from "../../src/constants/errors.js";
import OrderMenuTransformer from "../../src/utils/OrderMenuTransformer.js";

describe('메뉴 주문 입력 테스트', () => {
  test('각각의 메뉴의 개수 중 메뉴의 개수가 숫자가 아닌 것이 있을 경우, 에러를 출력해야 한다.', () => {
    expect(() => {
      OrderMenuTransformer.splitMenuArray(['타파스-1', '제로콜라-1', '티본스테이크-one']);
    }).toThrow(ERROR_MESSAGES.INVALID(COMMON.ORDER));
  });

  test('각각의 메뉴의 개수 중 1개 미만이 있을 경우, 에러를 출력해야 한다.', () => {
    expect(() => {
      OrderMenuTransformer.splitMenuArray(['타파스-0', '제로콜라-1', '티본스테이크-1']);
    }).toThrow(ERROR_MESSAGES.INVALID(COMMON.ORDER));
  });

  test('메뉴판에 존재하지 않은 메뉴가 존재할 경우, 에러를 출력해야 한다.', () => {
    expect(() => {
      OrderMenuTransformer.splitMenuArray(['밀크쉐이크-1', '제로콜라-1', '티본스테이크-1']);
    }).toThrow(ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_IS_NOT_EXIST));
  });

  test('입력된 메뉴 중 중복된 메뉴가 있을 경우, 에러를 출력해야 한다.', () => {
    expect(() => {
      OrderMenuTransformer.splitMenuArray(['타파스-1', '제로콜라-1', '티본스테이크-1', '제로콜라-1']);
    }).toThrow(ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_HAS_DUPLICATED));
  });

  test('한 번에 주문한 메뉴의 개수가 20개를 넘어간 경우, 에러를 출력해야 한다.', () => {
    expect(() => {
      OrderMenuTransformer.splitMenuArray(['타파스-1', '제로콜라-1', '티본스테이크-20']);
    }).toThrow(ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_IS_MORE_THAN_TWENTY));
  });
})