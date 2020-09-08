import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";

function drawImage() {
  document.body.style.backgroundImage = ProxyState.image.Template
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