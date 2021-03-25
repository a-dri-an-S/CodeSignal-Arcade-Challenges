// 130. Check if the given string is a correct time representation of the 24-hour clock.

function validTime(time) {
    let arr = time.split(":");
    return arr[0] < 24 && arr[1] < 60 ? true : false;
}