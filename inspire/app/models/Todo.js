export default class Todo {
  constructor({ id }) {
    this.id = id;
  }

  get Template() {
    return `<div class="card col-12">
              <div class="card-body d-flex flex-direction-column">
                <p class="card-text my-auto  pl-3">${this.id}</p>
              </div>
            </div>`
  }

}