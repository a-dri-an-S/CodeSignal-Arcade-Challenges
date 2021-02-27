// 15. Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
    // creates border based off of string length + 2 for side border
    let border = '*'.repeat(picture[0].length + 2);
    // adds top and bottom border + maps through array and appends '*' to front and back
    return [border, ...picture.map(x => `*${x}*`), border];
}