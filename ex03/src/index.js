function myEqualFunction(num) {
if (num == 23) {
 return "Equal";
} else {
 return "Not equal";
}
}

console.log(myEqualFunction(5), myEqualFunction(23), myEqualFunction("23"), myEqualFunction('23'), myEqualFunction("text"));
module.exports = myEqualFunction;