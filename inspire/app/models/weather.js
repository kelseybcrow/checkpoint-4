export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp

    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //That is what this data returns! data.main.temp is the temperature in Kelvin
    //TODO You should convert the temperature data to either F or C
    //check out the other data that comes back and see if there is anything you want to try

  }

  get Template() {
    return `<div class="card col-12">
              <div class="card-body d-flex flex-direction-column">
                <p class="card-text my-auto  pl-3">${this.city}</p>
                <p class="card-text my-auto  pl-3">${this.kelvin}</p>
=             </div>
            </div>`
  }
}