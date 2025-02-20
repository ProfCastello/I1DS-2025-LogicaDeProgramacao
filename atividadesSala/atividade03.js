/***************************************************** 
                Lista de Exercícios 03 
*****************************************************/
// 1. Crie um array de frutas com os seguintes elementos: Banana, Maçã, Pera, Uva, Morango.
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

// 2. Adicione Tangerina no final.
frutas.push("Tangerina");
console.table(frutas);

// 3. Adicione Goiaba no início.
frutas.unshift("Goiaba");
console.table(frutas);

// 4. Exiba o conteúdo do índice 5.
console.log(frutas[5]);

// 5. Exclua o elemento uva.
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

// 6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
var copia = frutas.slice(2, 5);
console.table(copia);
