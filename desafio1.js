let line = gets().split(" ");
let H = parseInt(line[0]);
let P = parseInt(line[1]);

let distancia = H * P;
let litros = distancia / 12;

console.log(litros.toFixed(3));