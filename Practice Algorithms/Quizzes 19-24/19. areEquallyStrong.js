// 19. Call two arms equally strong if the heaviest weights they each are able to lift are equal. Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms. Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    // if sum or own arms is equal to sum of friends arms are equal & right arm (or left) is equal to either arm, return true, else false
    return yourLeft+yourRight === friendsLeft+friendsRight && (yourRight === friendsLeft || yourRight === friendsRight);
}

