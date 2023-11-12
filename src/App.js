// controllers
import RestaurantController from './controllers/RestaurantController.js';

class App {
  constructor() {
    this.controller = new RestaurantController();
  }

  async run() {
    this.controller.initialize();

    await this.controller.receiveRequiredInfo();

    this.controller.displayReceipt();
  }


  
}

export default App;
