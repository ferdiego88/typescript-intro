export class Person {

  constructor(
    public name: string,
    private address: string = 'No Address',
    ) {
      this.name = name;
      this.address = address;
  }

}