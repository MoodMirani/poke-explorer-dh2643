export default class PokemonModel {
  constructor(number = 1) {
    this.observers = [];
    this.setNumber(number);
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
  setNumber(number) {
    if (number > 0) {
      this.number = number;
      this.notifyObservers();
    }
  }

  getNumber() {
    return this.number
  }

  addObservers(callback) {
    this.observers = [...this.observers, callback];
  }
}
