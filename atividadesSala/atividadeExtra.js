/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************

1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.

📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------

2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.

📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------

3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.

📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------

4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.

📌 Exemplo:
let numeros = [10, 20, 30, 40];  numeros[0]+numeros[1]+...
// Saída: Soma = 100
------------------------------------------------------------------------

5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.

📌 Exemplo:
Entrada: 8, 3, 5, 1, 9  
Saída: 1, 3, 5, 8, 9 
------------------------------------------------------------------------

*/
// 5. Ordenação de Números
const input = prompt("Insira vários números separados por vírgula:");
const numeros = input.split(',').map(Number);
numeros.sort((a, b) => a - b);
console.log("Números ordenados:", numeros.join(', '));
// 2. Tabuada
var tabuada = 6;
console.log(tabuada, "x 1 =", tabuada * 1);
console.log(tabuada, "x 2 =", tabuada * 2);
console.log(tabuada, "x 3 =", tabuada * 3);
console.log(tabuada, "x 4 =", tabuada * 4);
console.log(tabuada, "x 5 =", tabuada * 5);
console.log(tabuada, "x 6 =", tabuada * 6);
console.log(tabuada, "x 7 =", tabuada * 7);
console.log(tabuada, "x 8 =", tabuada * 8);
console.log(tabuada, "x 9 =", tabuada * 9);
console.log(tabuada, "x 10 =", tabuada * 10);

// 3. Fatorial de um Número
console.log("Fatorial de 5! =", 5 * 4 * 3 * 2 * 1);
