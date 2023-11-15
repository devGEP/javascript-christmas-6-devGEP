import { ERROR_COMMON, ERROR_MESSAGES } from "../../src/constants/messages.js";
import { ORDER_ERROR_REASON } from "../../src/constants/errors.js";
import OrderMenuTransformer from "../../src/utils/OrderMenuTransformer.js";

describe('메뉴가 올바른 형식으로 들어왔는지 테스트', () => {
  test('메뉴가 1개 미만인 경우, 에러를 출력해야 한다.', () => {
    expect(() => {
      OrderMenuTransformer.transformInputToMenuArray('');
    }).toThrow(ERROR_MESSAGES.INVALID(ERROR_COMMON.ORDER));
  });

  test('메뉴를 입력할 때, -을 입력하지 않은 경우, 에러를 출력해야 한다.', () => {
    expect(() => {
      OrderMenuTransformer.transformInputToMenuArray('타파스1');
    }).toThrow(ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.NOT_INCLUDE_HYPEN));
  });

  test('메뉴를 입력할 때, 주문할 메뉴의 이름을 입력하지 않은 경우, 에러를 출력해야 한다.', () => {
    expect(() => {
      OrderMenuTransformer.transformInputToMenuArray('-1');
    }).toThrow(ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_NAME));
  });

  test(`주문할 메뉴의 개수를 입력하지 않은 경우, 에러를 출력해야 한다.`, () => {
    expect(() => {
      OrderMenuTransformer.transformInputToMenuArray('타파스-');
    }).toThrow(ERROR_MESSAGES.ORDER_INVALID(ORDER_ERROR_REASON.MENU_COUNT));
  });
})