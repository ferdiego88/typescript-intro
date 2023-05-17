import { Hero } from "./classes/Hero.class";
import { Person } from "./classes/Person.class"
import { SuperHero } from "./classes/SuperHero.class";

const ironman = new Person('Gianluca','Santillan','New York');


console.log(ironman);
const hulk = new Hero('Ironman',40,'Bruce Banner');
console.log(hulk);

const tony = new Person('Tony','Stark','Oregon');
console.log(tony);


const superman = new SuperHero('Super Man',40,'Clark Kent', tony);
console.log(superman);




export {}