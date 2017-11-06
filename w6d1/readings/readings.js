// function Animal (name)  {
//     this.name = name;
// }

// Animal.prototype.sayHello = function () {
//     console.log("Hello my name is "+ this.name);
// };

// function Dog(name, coatColor){
//     Animal.call(this, name);
//     this.coatColor = coatColor;
// }

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     console.log('Bark');
// };

// const linesel = new Dog("linesel");

// linesel.bark();
// linesel.sayHello();

class Bicycle   {
  constructor(color, model)   {
      this.color = color;
      this.model = model;
  }

  action() {
      return "rolls along";
  }
}

class RaceBicycle extends Bicycle   {
  constructor(color, model, gears)    {
      super(color, model);
      this.gears = gears;
  }

  action()  {
    const oldAction = super.action();
    return `${oldAction} at blistering pace!`;
  }
}

const slow = new Bicycle('red', '1');
const fast = new RaceBicycle('blue', '2', '15');

console.log(slow.action());
console.log(fast.action());