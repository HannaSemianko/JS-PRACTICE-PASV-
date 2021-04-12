https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

    //You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

   // The returned value must be a string, and have "***" between each of its letters.

    //You should not remove or add elements from/to the array.

function twoSort(s) {
    s = s.sort();
    let word = s[0];
    let str = "";
    for(let i = 0; i < word.length; i++){
        str += word[i]+"***";
    }
    return str.slice(0,-3);
}