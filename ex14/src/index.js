function checkSign(num){

 return (num>0) ? "positive"
 :(num<0) ? "negative"
 :"zero";
 
 }
 
 console.log(checkSign(10), checkSign(-12), checkSign(0));
 module.exports = checkSign;