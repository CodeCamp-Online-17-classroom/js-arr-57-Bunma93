// write code here
const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];

let result = products.reduce((acc, cur) => {
    acc[cur.id] = { name: cur.name };
    return acc;
},{});

console.log(result);