// 98. Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one).

function extractMatrixColumn(matrix, column) {
    let arr = [];
    for(let i = 0; i < matrix.length; i++){
        arr.push(matrix[i][column]);
    }
    return arr;
}
