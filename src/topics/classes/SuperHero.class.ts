import { Person } from "./Person.class";

export class SuperHero  {
 
  //public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {

    //this.person = new Person(realName);
  }
}
