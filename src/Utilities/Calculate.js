const add = (first, second) => {
    return first + second
}
const multiply = (first, second) => {
    return first * second
}
const divided = (first, second) => {
    return first / second
}
const numbers = [20, 24, 235, 65, 89]
let sum = 0;
// for(number of numbers)
// ------or-----
const sumReader = (preious, current) => preious + current
const total = numbers.reduce(sumReader, 0)



export { add, multiply, divided }