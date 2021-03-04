function fileNaming(names) {
    // empty array to contain modified filenames without duplicate names
    let tab = [];
    // iterates through array
    for (let value of names) {
        
        let counter = 0;
        let name = value;
        while (tab.indexOf(value) != -1)
            value = `${name}(${++counter})`;
        tab.push(value);
    }
    return tab;
}