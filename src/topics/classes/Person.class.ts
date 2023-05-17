export class Person {

  constructor(
    public firtName: string,
    public lastName: string,
    private address: string = 'No Address',
    ) {}

}