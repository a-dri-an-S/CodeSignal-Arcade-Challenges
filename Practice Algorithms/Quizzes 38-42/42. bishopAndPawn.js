function bishopAndPawn(bishop, pawn) {
  
    let alpha = " abcdefgh".split('');
    
    bishop = [alpha.indexOf(bishop[0]), parseInt(bishop[1])];
    pawn = [alpha.indexOf(pawn[0]), parseInt(pawn[1])];
    
    let allCells = findDiagonalCells(bishop);
    
    let capture = allCells.find(el => el.toString() === pawn.toString()) !== undefined;
    
    return capture;

    function findDiagonalCells(inputCell) {
        let y = inputCell[0], x = inputCell[1];
        let cells = [];
    
        while (y >= 1 && x >= 1) {
            cells.push([y, x]);
            y--;
            x--;
        };
    
        (y = inputCell[0]), (x = inputCell[1]);
    
        while (y < 8 && x < 8) {
            y++;
            x++;
            cells.push([y, x]);
        }
    
        (y = inputCell[0]), (x = inputCell[1]);
    
        while (y > 1 && x < 8) {
            y--;
            x++;
            cells.push([y, x]);
        }
    
        (y = inputCell[0]), (x = inputCell[1]);
    
        while (y < 8 && x > 1) {
            y++;
            x--;
            cells.push([y, x]);
        }
    
        cells.sort((a, b) => a[0] - b[0]);
    
        return cells;
    }
}