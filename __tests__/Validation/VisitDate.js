import { ERROR_MESSAGES, COMMON } from "../../src/constants/errors.js";
import { EVENT_DATE } from "../../src/constants/common.js";
import VisitDateManager from "../../src/models/VisitDateManager.js";

describe('식당 방문 날짜 입력 테스트', () => {
  test('값이 입력되지 않은 경우, 에러를 출력해야 한다.', () => {
    const visitDateManager = new VisitDateManager();

    expect(() => {
      visitDateManager.setVisitDate('');
    }).toThrow(ERROR_MESSAGES.INVALID(COMMON.DATE));
  });

  test('입력된 날짜가 숫자가 아닌 값이 입력된 경우, 에러를 출력해야 한다.', () => {
    const visitDateManager = new VisitDateManager();

    expect(() => {
      visitDateManager.setVisitDate('100j');
    }).toThrow(ERROR_MESSAGES.INVALID(COMMON.DATE));
  });

  test('입력된 날짜가 음수인 경우, 에러를 출력해야 한다.', () => {
    const visitDateManager = new VisitDateManager();

    expect(() => {
      visitDateManager.setVisitDate('-10');
    }).toThrow(ERROR_MESSAGES.INVALID(COMMON.DATE));
  });

  test(`입력된 날짜가 ${EVENT_DATE.START} 미만의 숫자가 입력된 경우, 에러를 출력해야 한다.`, () => {
    const visitDateManager = new VisitDateManager();

    expect(() => {
      visitDateManager.setVisitDate('0');
    }).toThrow(ERROR_MESSAGES.INVALID(COMMON.DATE));
  });

  test(`입력된 날짜가 ${EVENT_DATE.END} 초과의 숫자가 입력된 경우, 에러를 출력해야 한다.`, () => {
    const visitDateManager = new VisitDateManager();

    expect(() => {
      visitDateManager.setVisitDate('50');
    }).toThrow(ERROR_MESSAGES.INVALID(COMMON.DATE));
  });
})