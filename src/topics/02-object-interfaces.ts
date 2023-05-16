interface Character {
  name: string,
  hp: number,
  skills: string[],
  hometown?: string
}

let skills: string[] = [ 'Vuela', 'Kame Hame Ha', 'Super Fuerza'];

const strider: Character = {
  name: 'Es un Strider',
  hp: 250,
  skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivender';
console.table(strider);

export {};