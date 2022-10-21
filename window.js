
name = "kushi"

function add(num1, num2){
    result = num1 + num2
    console.log("inside",result);
    console.log("Name id " , name);
    return result;
}
// console.log("outSide",result);
var sum = add(13,12)
console.log(sum);

console.log("Name id " + name);
console.log("result outside", result);
