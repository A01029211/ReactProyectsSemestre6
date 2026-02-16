let a ,b,rest;

[a,b] = [10,20];
console.log(a);
// Resultado esperado 10

console.log(b);
// Resultado esperado 20

[a,b, ...rest] = [30,40,50,60,70,80];
console.log(rest);