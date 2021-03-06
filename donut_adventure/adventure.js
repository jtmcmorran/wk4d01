class Hero{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = ['i\'m fresher than day old pizza',
    'you can\'t count my calories']
  }
  talkSass(){
       console.log(this.catchPhrases[Math.floor(Math.random()*this.catchPhrases.length)]);
  }
  announceHealth(){
    console.log(this.health);
  }
  fight(){
    console.log('i\'m ready to rumble');
  }
}

class Enemy{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = ['i\'m youtube famous',
'i\'m more dangerous than an uncovered sewer']
  }
  talkSmack(){
       console.log(this.catchPhrases[Math.floor(Math.random()*this.catchPhrases.length)]);
  }
  announceHealth(){
    console.log(this.health);
  }
  fight(){
    console.log('i\'m going to flatten you like a slice of pepperoni!');
  }
}

let dougie = new Hero("Dougie the Donut");
let pizzaRat = new Enemy("Pizza Rat");
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();
