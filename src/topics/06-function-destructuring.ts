import { Product, taxCalculation } from './interfaces/Product.inteface';

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0
} 

const ipad: Product = {
  description: 'Ipad',
  price: 250.0
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