function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  return a / b
}

var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number)

add5()

console.log(number)

number = 10

add5()

console.log(number)

divideBy3()

console.log(number)

function inc(a) {
  return a += 1
}

function dec(a) {
  return a -+ 1
}

var x = 2.222

function makeInt(x, base) {
  parseInt(x, base)
}

console.log(x)


function preserveDecimal(a) {
  parseFloat(a)
}
