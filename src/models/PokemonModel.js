export default class PokemonModel {
  constructor(number = 1, name = "bulbasaur") {
    //lista över presenters}
    this.observers = [];
    this.setNumber(number);
    this.setName(name);
  }

  setNumber(number) {
    if (number > 0) {
      this.number = number;
      console.log("Number set in model.");
    }
  }

  getNumber() {
    return this.number
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name ?? this.name | "no name";
  }

  addObservers(callback) {
    console.log("Vi är i addObservers");
    this.callback = callback;
    this.observers = this.observers.concat(this.callback);
    // this.observers = [...this.observers, callback];
  }

  notifyObservers() {
    this.observers.forEach((callback) => {
      try {
        callback();
      } catch (err) {
        console.log("Error", err, callback);
      }
    });
  }
}
