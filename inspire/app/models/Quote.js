export default class Quote {
  constructor(data) {
    this.quote = data.quote
  }

  get Template() {
    return `<div class="card col-12">
              <div class="card-body d-flex flex-direction-column">
                 <p class="card-text my-auto  pl-3">${this.qupte}</p>
              </div>
            </div>`
  }
}