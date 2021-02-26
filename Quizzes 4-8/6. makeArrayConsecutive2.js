// 6. Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

const makeArrayConsecutive2 = (statues) => (Math.max(...statues) - Math.min(...statues) + 1) - statues.length;

// Take the largest size statue and subtract it by the smallest size. Then subtract that difference by the # of statues in an array to return the minimum amount of statues to needed to fill in the gaps so they increment by 1 in the order of smallest to tallest.