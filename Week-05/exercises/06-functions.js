console.log('--EXERCISE 06: FUNCTIONS');

/* Crear una función suma que reciba dos valores numéricos y retorne el resultado.
 Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
 dicha variable en la consola del navegador. */

console.log('-Exercise 6.a:');

function sum(a, b) {
  return a + b;
}

var result = sum(2, 4);

console.log(result);

/* Copiar la función suma anterior y agregarle una validación para controlar si alguno 
de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno 
de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('-Exercise 6.b:');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    alert('One of the parameters is not a number.');
    return NaN;
  }
  return a + b;
}

var result = sum(2, 'l');

console.log(result);

/* Crear una función “validateInteger” que reciba un número como parámetro y
 devuelva verdadero si es un número entero. */

console.log('-Exercise 6c:');

function validateInteger(num) {
  if (typeof num !== 'number') {
    return false;
  }
  return num % 1 === 0;
}

var result = validateInteger(10);

console.log(result);

/* Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
 y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar
  el número convertido a entero (redondeado). */

console.log('-Exercise 6d:');

function sum(c, d) {
  if (typeof c !== 'number' || typeof d !== 'number') {
    alert('One of the parameters is not a number.');
    return NaN;
  }
  if (!validateInteger(c) || !validateInteger(d)) {
    alert('One of the parameters is not an integer.');
    c = Math.round(c);
    d = Math.round(d);
  }
  return c + d;
}

var result = sum(2, 4.7);

console.log(result);

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
 probando que todo siga funcionando igual que en el apartado anterior. */

console.log('-Exercise 6e:');

function validateNumber(num) {
  if (typeof num !== 'number') {
    alert('The parameter is not a number.');
    return NaN;
  }
  return true;
}

function sum(c, d) {
  if (!validateNumber(c) || !validateNumber(d)) {
    return NaN;
  }
  if (!validateInteger(c) || !validateInteger(d)) {
    alert('One of the parameters is not an integer.');
    c = Math.round(c);
    d = Math.round(d);
  }
  return c + d;
}

var result = sum(2, 4.7);

console.log(result);