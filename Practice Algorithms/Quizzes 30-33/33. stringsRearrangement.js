// 33. Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

function stringsRearrangement(inputArray) {
    let bruteForce = function(depth, inputArray) {
        let swap = function(i, j) {
            tmp = inputArray[i];
            inputArray[i] = inputArray[j];
            inputArray[j] = tmp;
        };
        if (depth === inputArray.length) {
            let correct = true;
            for (let i = 0; i < inputArray.length - 1; i++) {
            let differences = 0;
            for (let j = 0; j < inputArray[i].length; j++) {
                if (inputArray[i][j] !== inputArray[i + 1][j]) {
                differences++;
                }
            }
            if (differences !== 1) {
                correct = false;
            }
            }
            if (correct) {
            return true;
            }
            return false;
        }
        for (let i = depth; i < inputArray.length; i++) {
            swap(depth, i);
            if (bruteForce(depth + 1, inputArray)) {
            return true;
            }
            swap(depth, i);
        }
        return false;
        };
        if (bruteForce(0, inputArray)) {
        return true;
        }
        return false;
    }