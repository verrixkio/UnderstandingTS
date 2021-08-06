//an interface is used 
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "max",
  age: 16,

  greet(phrase: string) {
    console.log(phrase + " " + this.name)
  }
};
user1.greet("Hello there I am")