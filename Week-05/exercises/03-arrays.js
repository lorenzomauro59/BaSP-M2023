console.log('--EXERCISE 03: ARRAYS');

/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('-Exercise 3.a:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
  'Octubre', 'Noviembre', 'Diciembre'];

console.log(months[4]);
console.log(months[10]); 

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log('-Exercise 3.b:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
  'Octubre', 'Noviembre', 'Diciembre'];

months.sort();

console.log(months);

/* Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log('-Exercise 3.c:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
  'Octubre', 'Noviembre', 'Diciembre'];

months.unshift('Meses:');
months.push('Ultimo mes')

console.log(months);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log('-Exercise 3.d:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
  'Octubre', 'Noviembre', 'Diciembre'];

months.shift('');
months.pop('');

console.log(months);

/* Invertir el orden del array (utilizar reverse).*/

console.log('-Exercise 3.e:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
  'Octubre', 'Noviembre', 'Diciembre'];

months.reverse();

console.log(months);

/* Unir todos los elementos del array en un único string donde cada mes este separado por un guión -
 (utilizar join).*/

console.log('-Exercise 3.f:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
  'Octubre', 'Noviembre', 'Diciembre'];

var monthsTogheter = months.join('-');

console.log(monthsTogheter);

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

console.log('-Exercise 3.g:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
  'Octubre', 'Noviembre', 'Diciembre'];

var monthsPart = months.slice(4, 11);

console.log(monthsPart);