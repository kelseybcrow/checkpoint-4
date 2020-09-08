export default class Todo {
  constructor(data) {
    this.id = data.id
    // this.completed =
    // this.user =
    // this.description =
  }

  get Template() {
    return `<div class="card col-12">
              <div class="card-body d-flex flex-direction-column">
                <p class="card-text my-auto  pl-3">${this.id}</p>
              </div>
            </div>`
  }

}