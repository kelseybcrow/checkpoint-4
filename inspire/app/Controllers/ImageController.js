import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";

function drawImage() {
  // document.getElementById("image").image = ProxyState.image.url
  document.body.style.backgroundImage = "url('ProxyState.image.url')"
  console.log(ProxyState.image);
}
export default class ImageController {
  constructor() {
    ProxyState.on('image', drawImage);
    this.getImage()
  }

  getImage() {
    try {
      imageService.getImage()
    }
    catch (e) {
      console.error(e)
    }
  }
}