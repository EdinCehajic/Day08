function mathTest(x, y) {
    
    if (x < 0 || y < 0) {
      return undefined;
    }
    
    
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
  }
  
  // Only
  console.log(mathTest(2,2));
  console.log(mathTest(2,2));
  console.log(mathTest(-2,2));
  console.log(mathTest(2,-2));
  console.log(mathTest(2,8));
  console.log(mathTest(3,3));
  console.log(mathTest(0,0));
// Only
  module.exports = mathTest;