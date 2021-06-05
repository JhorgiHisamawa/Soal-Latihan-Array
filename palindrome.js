function checkPalindrome(word) {    
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}


//================================ or ========================

function isPalindrome(letters) {

    var characters  = letters.split(''),
        firstLetter = characters.shift(),
        lastLetter  = characters.pop();

    if (firstLetter !== lastLetter) {
        return false;
    }

    if (characters.length < 2) {
        return true;
    }

    return isPalindrome(characters.join(''));

}
