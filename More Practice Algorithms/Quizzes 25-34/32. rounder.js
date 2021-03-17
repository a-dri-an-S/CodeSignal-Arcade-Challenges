// 32. We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

function rounders(value) {
    value = [...value.toString()].reverse();
    for(let i = 0; i < value.length - 1; i++) {
        value[i] < 5 ? value[i] = 0 : (value[i + 1]++, value[i] = 0);
    }
    return +value.reverse().reduce((x, y) => ""+ x + y);
}
