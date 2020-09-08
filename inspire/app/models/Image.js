export default class Image {
  constructor(data) {
    this.image = data.image
  }

get Template() {
  return `<img class="image-fluid" src="${this.image}" alt="">`
}

}