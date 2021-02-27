// 30. Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too)

function circleOfNumbers(n, firstNumber) {
    // finds middle of number
    let middle = n / 2;
    // if firstNumber is less than middle, Add middle #, else subtract to find opposite integer in a circle
    if (firstNumber < middle){
        return firstNumber + middle
    } else {
        return firstNumber - middle
    }
}
