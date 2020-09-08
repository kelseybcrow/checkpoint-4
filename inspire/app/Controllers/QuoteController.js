import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function drawQuote() {
  document.getElementById("quote").innerHTML = ProxyState.quote.Template
  console.log(ProxyState.quote);
}
export default class QuoteController {
  constructor() {
    ProxyState.on("quote", drawQuote);
    this.getQuote()
  }

  getQuote() {
    try {
      quoteService.getQuote()
    }
    catch (e) {
      console.error(e)
    }
  }
}