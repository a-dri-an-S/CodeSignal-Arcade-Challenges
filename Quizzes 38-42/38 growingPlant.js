// 38. Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

// Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    // number of days
    let days = 0;
    // height of plant
    let height = 0;
    // while height is not at desired height
    while(height < desiredHeight){
        // grow by a day
        days++
        // grow in height
        height += upSpeed;
        // if desired height has been reached
        if (height >= desiredHeight){
            // return number of days spent growing
            return days;
            // else decrease height at night
        } else {
            height -= downSpeed;
        }
    }
}