function isLess(a,b){
if ( a < b) {
 return "true";
} else {
 return "false";
}
}
console.log(isLess(10,15), isLess(15,10));
module.exports = isLess;