// 7. One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.

// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

function lateRide(n) {
    // if n is an integer (nhr : 00) return hour
    if((n / 60) === parseInt(n / 60) ) return n / 60;
    else {
        // concatenates hr + mins as string
        let time = ("" + parseInt(n / 60)) + ("" + Math.round((parseFloat(n / 60) - parseInt(n / 60)) * 60));
        // converts string into array at 1 character intervals
        let timeArr = time.match(/.{1,1}/g);
        // returns sum of array
        return timeArr.reduce((a, b) => +a + +b);
        }
}