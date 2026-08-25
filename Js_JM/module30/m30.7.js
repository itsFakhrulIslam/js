//^ topic of the Inheritance, prototypical inheritance
/**
 *
 */

class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
  play() {
    console.log(`${this.name} is playing, its age is ${this.age}`);
  }
}

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is eating.`);
//   }
//   play() {
//     console.log(`${this.name} is playing, its age is ${this.age}`);
//   }
// }

class Dog extends Animals {
  constructor(name, age, chose) {
    super(name, age);
    this.chose = chose;
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}
const dog = new Dog("tommy", 3, "doggy");
console.log(dog);

class Cat extends Animals {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  jumping() {
    console.log(`${this.name} is jumping`);
  }
}
const cat = new Cat("mili", 1, "brown");
console.log(cat);
