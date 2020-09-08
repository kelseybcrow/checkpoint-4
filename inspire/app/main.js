import TodoController from "./controllers/TodoController.js";
import WeatherController from "./controllers/WeatherController.js";


class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.imageController = new ImageController();
    this.quoteController = new QuoteController();
  }
}


window["app"] = new App();