import { Product, taxCalculation } from './interfaces/Product.inteface';

const shoppingCart: Product[] = [
    {
      description: 'Nokia',
      price: 100
    },
    {
      description: 'Huawei',
      price: 150
    }
];

const tax = 0.15;

const [total, totalTax] = taxCalculation({
  products: shoppingCart,
  tax
});

console.log('Total', total);
console.log('Tax', totalTax);





export {};