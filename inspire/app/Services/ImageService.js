import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { api } from "./AxiosService.js";

class ImageService {
  async getImage() {
    console.log("hello from imageservice");
    let res = await api.get('image');
    ProxyState.image = new Image(res.data);
  }
}

const imageService = new ImageService();
export default imageService;