class Hamster{
  constructor(name){
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun(){
    console.log('squeak squeak');
  }
  eatFood(){
    console.log('nibble nibble');
  }
  getPrice(){
    return this.price;
  }
}

class Person{
  constructor(name){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
  getWeight(){
    return this.weight;
  }
  greet(){
    console.log(`hello ${this.name}`);
  }
  eat(x){
    for(let i=0;i<x;i++){
      this.weight = this.weight+1;
      this.mood = this.mood+1;
    }
  }
  excercise(x){
    for(let i=0;i<x;i++){
      this.weight = this.weight-1;
    }
  }
  ageUp(x){
    for(let i=0;i<x;i++){
      this.age = this.age+1;
      this.height = this.height+1;
      this.weight = this.weight+1;
      this.mood = this.mood-1;
      this.bankAccount = this.bankAccount+10;
    }
  }

  buyHamster(hamster){
    this.hamsters.push(hamster);
    this.mood = this.mood+10;
    this.bankAccount = this.bankAccount - hamster.getPrice();
  }
}
