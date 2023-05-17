
interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0
} 

const ipad: Product = {
  description: 'Ipad',
  price: 250.0
} 

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

const taxCalculation = ({tax, products}: TaxCalculationOptions): [number, number] => {
    
  let total = 0;
  products.forEach( ({price}) => total += price);
  
  return [total, total*tax];
}



const shoppingCart = [phone, ipad];
const tax = 0.15;

const [productTotal, totalTax] = taxCalculation( {
  products: shoppingCart,
  tax
});

console.log('Total: ', productTotal);
console.log('Tax: ', totalTax);


export {};