// Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

// Given two two-dimensional arrays, check if they are isomorphic.

function areIsomorphic(array1, array2) {
    let arr1 = array1.map(i => i.length);
    let arr2 = array2.map(i => i.length);
    return [...arr1].toString() === [...arr2].toString();
}
