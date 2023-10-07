// // Método Concat
// var vetor1 = new Array(1, 2, 3);
// var vetor2 = new Array(4, 5, 6);
// var vetor3 = new Array(7, 8, 9);
// var result = vetor1.concat(vetor2, vetor3);

// document.write(result);

//Método indexOf()

// var frutas = ["maçã", "banana", "laranja", "uva"];

// var indiceBanana = frutas.indexOf("banana");
// document.write(indiceBanana); // Saída: 1

// var indiceAbacaxi = frutas.indexOf("abacaxi");
// document.write(indiceAbacaxi); // Saída: -1

//var nomes = ["Sérgio", "Maria", "Yasmin", "Yasmin", "Richard", "Bia", "Camila"];

// var indiceNomes = nomes.indexOf("Andre");
// document.write(indiceNomes, "\n");

//Encontrar um nome específico no vetor

// var nomes2 = ["Gabrielly", "Maria", "Sarah", "Ana", "Carlos"];

// var nomeProcurado = "Erik";
// var indice = nomes2.indexOf(nomeProcurado);

// if (indice !== -1) {
//   document.write("O nome '" + nomeProcurado + "' foi encontrado no índice " + indice + ".");
// } else {
//   document.write("O nome '" + nomeProcurado + "' não foi encontrado no vetor.");
// }

//metodo sort()
// var ordenarNum = [8,15,1,7,2,90,3];
// document.write(ordenarNum.sort());

//metodo reverse()
// var desordenarNum = [1,2,3,4,5,6,7,8,9,10]
// document.write(desordenarNum.reverse());

// var alunos = ["Gabrielly", "Maria", "Sarah", "Ana", "Carlos"];

// alunos.forEach(function(estudante) {
//   document.write("Este(a) aluno(a) é do curso de informática:  " +  estudante + "<br>");
// });

//Metodo map()
// var numeros = [1, 2, 3, 4, 5];

// var numerosDobrados = numeros.map(function(numero) {
//   return numero * 2;
// });

// var resultadoElemento = document.querySelector('#resultado');
// resultadoElemento.innerHTML = numerosDobrados; // Define o HTML do elemento


//resultadoElemento.innerHTML = numerosDobrados.join(','); // Define o HTML do elemento

// OU

//resultadoElemento.textContent = numerosDobrados.join(', '); // Define o texto do elemento

// var numeros = [1, 2, 3, 4, 5];

// var numerosDobrados = numeros.map(function(numero) {
//   return numero * 2;
// });

// var resultadoElemento = document.querySelector('#resultado');
// resultadoElemento.value = numerosDobrados.join(', '); // Define o valor do elemento


//Método filter()
 var numeros = [1, 2, 3, 4, 5];

// var numerosPares = numeros.filter(function(numero) {
//   return numero % 2 === 0;
// });

// resultadoPares = document.getElementById("resultado");
// //ou
// //resultadoPares = document.querySelector("#resultado");
// resultadoPares.innerHTML = numerosPares;

//Metodo Filter
// var numeros = [1, 2, 3, 4, 5, 6];

// var numerosPares = numeros.filter(par);

// function par(numero) {
//   return numero % 2 === 0;
// }
//

// var resultadoPares = document.getElementById("resultado");
// resultadoPares.innerHTML = numerosPares.join(',');

// function somar(num1, num2) {
//     return num1 + num2;
//   }
  
//   var resultado = somar(3, 5);
//   document.write('resultado: ' + resultado); 
  
function nome(nome, sobrenome){
    return nome + sobrenome;
}
var nomeCompleto = nome('Debora ' , 'Paulo')
document.getElementById('resultado').innerHTML = nomeCompleto;

