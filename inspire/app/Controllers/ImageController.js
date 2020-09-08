import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";

function drawImage() {
  let template = ""
  ProxyState.image.forEach(i => template += i.Template)
  document.body.style.backgroundImage = template
  //document.getElementById("image").innerHTML = template
  console.log(ProxyState.image);
}
export default class ImageController {
  constructor() {
    ProxyState.on("image", drawImage);
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