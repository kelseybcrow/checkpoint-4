import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function drawQuote() {
  let template = ""
  ProxyState.quote.forEach(q => template += q.Template)
  document.getElementById("quote").innerHTML = template
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