/************************************************************************ 
                        Lista de Exercícios 05
*************************************************************************/
// 1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.
function idade(anoAtual, anoNascimento) {
  return anoAtual - anoNascimento;
}
console.log("A pessoa tem", idade(2025, 2001), "anos.");

// 2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o veículo faz uma média de 12 Kms/L.

const combustivel = (litros) => {
  return litros * 12;
};
var car1 = 20
var car2 = 8
var car3 = 2
console.log("Carro 1: ",car1,"->",combustivel(car1),"kms.")
console.log("Carro 1: ",car2,"->",combustivel(car2),"kms.")
console.log("Carro 1: ",car3,"->",combustivel(car3),"kms.")
