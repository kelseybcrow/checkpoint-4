export default class Quote {
  constructor(data) {
    this.body = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return `<div class="card col-12">
              <div class="card-body d-flex flex-direction-column">
                 <p class="card-text my-auto  pl-3">${this.body}<br>~${this.author}</p>
              </div>
            </div>`
  }
}