import { Passenger } from "./interfaces/Passenger.interface"

const passenger1: Passenger = {
  name: 'Fernando'
}

const passenger2: Passenger = {
  name: 'Kevin',
  children: ['Maria', 'Juanita']
}


const returnChildren = (passenger: Passenger):number => {
  
  if (!passenger.children)return 0;

  //const howManyChildren = passenger.children?.length || 0;
  const howManyChildren = passenger.children!.length;
  console.log(passenger.name,howManyChildren);

  return howManyChildren;
}

returnChildren(passenger1);
returnChildren(passenger2);


