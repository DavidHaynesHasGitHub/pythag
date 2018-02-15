var input = [
  { a: 3, b: 4 },
  { a: 12, b: 5 },
  { a: 8, b: 15 }
];
//x^2 + y^2 = z ^2

var result = input.map(function(obj){
  return Math.sqrt(Math.pow(obj.a, 2) + Math.pow(obj.b, 2))}
);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
