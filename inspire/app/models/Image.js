export default class Image {
  constructor(data) {
    this.image = data.image
  }

get Template() {
  return `<div class="row">
            <img class="image-fluid" src="${this.image}" alt="">
          </div>`
}
}