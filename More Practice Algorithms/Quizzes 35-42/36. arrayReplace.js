// 36. Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for(let i = 0; i < inputArray.length; i++){
        if (inputArray[i] === elemToReplace){
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}

const arrayReplace = (inputArray, elemToReplace, substitutionElem) => inputArray.map(i => i === elemToReplace ? substitutionElem : i);