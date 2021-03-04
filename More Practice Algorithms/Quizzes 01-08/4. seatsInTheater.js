// 4. Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// seats all the way to the left, including own seat * number of rows behind
const seatsInTheater = (nCols, nRows, col, row) => (nCols - (col - 1)) * (nRows - row);
