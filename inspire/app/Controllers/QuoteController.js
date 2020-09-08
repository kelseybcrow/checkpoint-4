//TODO Create methods for constructor, and rendering the quote to the page
import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function drawQuote() {
  let template = ""
  ProxyState.quote.forEach(q => template += q.Template)
  document.getElementById("weather").innerHTML = template
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