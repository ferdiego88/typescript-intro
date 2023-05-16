
 const addNumbers = (a: number, b: number):number => a+b;

const result = addNumbers(15,5);

 console.log(result, addNumbers(5,9));
 

 function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
  return firstNumber * base;
 }

 const multiplyResult = multiply(5);
 console.log(multiplyResult);

 //Funciones con objetos como argumentos
 
 interface Character {
  name: string;
  hp: number;
  showHp: ()=> void
 }

 const healCharacter = (character: Character, amount: number) => {
    character.hp +=  amount;
 }

 const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
      console.log(`El personaje se llama ${this.name}  y tiene ${this.hp} puntos de vida`);
      
    }
 }

 healCharacter(strider, 10);
 healCharacter(strider, 60);
 strider.showHp();

export {};