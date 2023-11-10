import { Console } from '@woowacourse/mission-utils';
import InputView from './View/InputView.js';

class App {
  constructor() {
    this.date = 0;
    this.menu = [];
  }

  async run() {
    await this.askVisitDate();
    await this.askOrderMenu();
  }

  async askVisitDate() {
    this.date = await InputView.readVisitDate();
    Console.print(this.date);
  }

  async askOrderMenu() {
    this.menu = await InputView.readOrderMenu();
    Console.print(this.menu);
  }
  
}

export default App;
