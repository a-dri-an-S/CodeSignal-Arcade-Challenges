// 46. Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

function electionsWinners(votes, k) {
    // most votes
    let leader = Math.max(...votes);
    // ties with leader
    let ties = 0;
    // iterates through array and checks ties with leader
    for(let i = 0; i < votes.length; i++){
        if(votes[i] === leader) ties++;
    }
    // count of possible winnders
    let count = 0;
    // loops through array and adds total # of votes
    for(let j = 0; j < votes.length; j++){
        // if total number exceeds leader, add to count
        if((votes[j] + k) > leader){
            count++;
        }
    }
    // if 0 are greater than leader and there was 1 tie, return 1 winner
    if(count === 0 && ties === 1) return 1;
    // returns possible number of winners
    return count;
}