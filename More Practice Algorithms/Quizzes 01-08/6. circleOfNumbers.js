// 6. Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// if firstNumber is less than halfway + half, else subtract half to get radially opposite number
const circleOfNumbers = (n, firstNumber) => firstNumber < (n / 2) ? firstNumber + (n / 2) : firstNumber - (n / 2);

