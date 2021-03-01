// 55. Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

function differentSquares(matrix) {
    let hist = [];
    let count = 0;
    const matrixToNum = m => {
        let num = 0;
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[i].length; j++) {
                num *= 10;
                num += m[i][j];
            }
        }
        return num;
    }
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            let n = matrixToNum([
                [matrix[i][j], matrix[i][j + 1]],
                [matrix[i + 1][j], matrix[i + 1][j + 1]]
            ]);
            if (hist.indexOf(n) == -1) {
                hist.push(n);
                count++;
            }
        }
    }
    return count;
}