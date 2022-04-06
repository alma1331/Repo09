function randomRangNumber(minNumber, maxNumber) {
 return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

console.log(randomRangNumber(18,20)); 
module.exports = randomRangNumber;
