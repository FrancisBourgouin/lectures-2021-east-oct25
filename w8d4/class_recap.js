// What's a class ?

// Template / Blueprint / Model

class Potato {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  makeSound = function () {
    console.log("ruff krrr");
  };
}

class TalkingPotato extends Potato {
  constructor(type, name) {
    super(type, name);
  }

  makeSound = function () {
    console.log("Thud the spud");
  };

  whoAreYou = function () {
    console.log(`I AM ${this.name}`);
  };
}

const somePotato = new Potato("Russet", "Bob");
const somePotato2 = new TalkingPotato("Yukon Gold", "Robert");

somePotato2.whoAreYou();
console.log(somePotato);
console.log(somePotato2);
