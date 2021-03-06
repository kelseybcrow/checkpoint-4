import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

function drawWeather() {
  document.getElementById("weather").innerHTML = ProxyState.weather.Template
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
}
