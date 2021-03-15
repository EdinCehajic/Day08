function randomRangeNumber(minNumber, maxNumber) {

    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  
  }
  
  var myRandom = randomRangeNumber(3, 15);
  
  console.log(myRandom);