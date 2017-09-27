class GuessingGame {
    constructor() {
      this.num = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
      this.num = Math.round((this.max - this.min)/2);
      // return this;
    }

    guess() {
      return this.num;
    }

    lower() {
      this.max = this.num;
      this.num = Math.round((this.max + this.min)/2);
      // return this;
    }

    greater() {
      this.min = this.num;
      this.num = Math.round((this.max + this.min)/2);
      // return this;
    }
}

module.exports = GuessingGame;
