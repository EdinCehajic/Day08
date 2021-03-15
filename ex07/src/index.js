// Only change code below this line
var sum = 0;
function addThree() {
    sum += 3;
}
addThree(3);
console.log(sum);

function addFive() {
    sum += 5;
}
addFive();
console.log(sum);

// Only change code above this line

module.exports = {
    addThree,
    addFive
};