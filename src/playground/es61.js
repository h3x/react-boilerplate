class Person {
  constructor(name = "test", age = 0){
    this.name = name
    this.age = age
  }

  getGreeting(){
    return `Hello ${this.name}` 
  }

  getDesciption(){
    return `${this.name} is ${this.age} years old`
  }

}

class Student extends Person {
  constructor(name="test", age=0, major){
    super(name, age);
    this.major = major;
  }

  getDesciption(){
    return this.hasMajor() ? `${super.getDesciption()} and takes ${this.major}` : `${super.getDesciption()}`;
  }

  hasMajor(){
    return !!this.major;
  }
}

class Traveler extends Person {
  constructor(name, age, location){
    super(name,age)
    this.location = location;
  }

  hasLocation(){
    return !!this.location;
  }

  getGreeting(){
    return this.hasLocation() ? `${super.getDesciption()} and comes from ${this.location}` : `${super.getDesciption()}`;
  }
}


const me = new Student('Adam Austin', 35, 'computer science');

const other = new Traveler('pete', 22, 'sf');

console.log(me.getDesciption())
console.log(other.getGreeting())