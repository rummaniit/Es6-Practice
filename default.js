function addValue(num1, num2 = 20) {
    let sum = num1 + num2
    return sum
}
let add = addValue(15, 5)
//if num2 is not given then default valu num2=20 will be set
console.log(add)