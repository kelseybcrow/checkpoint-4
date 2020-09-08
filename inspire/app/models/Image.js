export default class Image {
  constructor(data) {
    this.url = data.url
    this.id = data.id
  }

get Template() {
  return `<div class="row">
            <div class="col-12">
            <img class="image-fluid" src="${this.url}" alt="">
            </div>
          </div>
          `

          }

}