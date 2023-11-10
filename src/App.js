import { Console } from '@woowacourse/mission-utils';
import InputView from './View/InputView.js';

class App {
  constructor() {
    this.date = 0;
  }

  async run() {
    await this.askVisitDate();
  }

  async askVisitDate() {
    this.date = await InputView.readVisitDate();
    Console.print(this.date);
  }
  
}

export default App;
