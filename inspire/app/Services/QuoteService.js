import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { api } from "./AxiosService.js";

class QuoteService {
  async getQuote() {
    console.log("hello from quoteservice");
    let res = await api.get('quotes');
    ProxyState.quote = new Quote(res.data);
  }
}

const quoteService = new QuoteService();
export default quoteService;