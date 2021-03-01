// 53. Check if the given string is a correct time representation of the 24-hour clock.

function validTime(time) {
    // splits time into hours and minutes
    let split = time.split(':');
    // checks if hours are under 24 & minutes under 60
    return split[0] < 24 && split[1] < 60 ? true : false;
}