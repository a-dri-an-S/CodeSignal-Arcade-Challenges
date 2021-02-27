// 29. Given two cells on the standard chess board, determine whether they have the same color or not.

function chessBoardCellColor(cell1, cell2) {
    // creates an array of letters for one side of board
    let alpha = [..."ABCDEFGH"];

    const evenOdd = (num) => num % 2 === 0 ? 'even' : 'odd';
    
    const whichColor = (arr) => arr[0] === arr[1] ? 'black' : 'white';

    cell1 =  [evenOdd(alpha.indexOf(cell1[0])), evenOdd(parseInt(cell1[1]))]
    cell2 =  [evenOdd(alpha.indexOf(cell2[0])), evenOdd(parseInt(cell2[1]))]
    
    return whichColor(cell1) === whichColor(cell2)
}