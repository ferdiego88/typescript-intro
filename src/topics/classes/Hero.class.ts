import { Person } from "./Person.class"


export class Hero extends Person {
    
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, 'New York');
  }
}
