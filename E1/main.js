// Ejercicio 1: Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// const ParImpar = (num) => {
//   if (num % 2 === 0) {
//     console.log(`El numero ${num} es par`);
//   } else {
//     console.log(`El numero ${num} es impar`);
//   }
// };

// ParImpar(1);
// ParImpar(2);
// ParImpar(3);
// ParImpar(4);

// Ejercicio 2: Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
// const MayorMenorIgual = (num1, num2) => {
//   if (num1 > num2) {
//     console.log(`El numero ${num1} es mayor que ${num2}.`);
//   } else if (num1 < num2) {
//     console.log(`El numero ${num2} es mayor que ${num1}.`);
//   } else {
//     console.log(`Los numeros son iguales.`);
//   }
// };

// MayorMenorIgual(7, 5);
// MayorMenorIgual(2, 9);
// MayorMenorIgual(1, 1);

// Ejercicio 3: Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// const Multiplo5 = (num3) => {
//   if (num3 % 5 === 0) {
//     console.log(`El numero ${num3} es multiplo de 5`);
//   } else {
//     console.log(`El numero ${num3} no es multiplo de 5`);
//   }
// };

// Multiplo5(5);
// Multiplo5(7);
// Multiplo5(10);
// Multiplo5(13);
// Multiplo5(25);

// Ejercicio 4: Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// const Contador = (num4) => {
//   for (let i = 0; i <= num4; i++) {
//     console.log(`${i}`);
//   }
// };

// Contador(10);

// Ejercicio 5: Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

// const PalabraNumero = (palabra, num5) => {
//   for (let i = 1; i <= num5; i++) {
//     console.log(palabra, i);
//   }
// };

// PalabraNumero("Hola!", 5);
// PalabraNumero("Buen dia!", 2);
// PalabraNumero("Saludos🙌", 9);

// Ejercicio 6: Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// const RankingFIFA = [
//   "Argentina",
//   "Francia",
//   "Brasil",
//   "Inglaterra",
//   "Belgica",
//   "Portugal",
//   "Paises Bajos",
//   "Espania",
//   "Italia",
//   "Croacia",
// ];

// RankingFIFA.forEach((team) => {
//   console.log(team);
// });

// Ejercicio 7: Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
// function muestra() {
//   const ArrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (i = 0; i < ArrayNumeros.length; i++) {
//     if (ArrayNumeros[i] != ArrayNumeros[4]) {
//       console.log(ArrayNumeros[i]);
//     }
//   }
// }

// muestra();

// Ejercicio 8: Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
// const num8 = prompt(`Por que numero desea multiplicar?`);
// const num8 = 2;
// const num8 = 5;

// ArrayNumeros.forEach((numero) => {
//   console.log(numero * num8);
// });
