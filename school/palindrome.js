// Topic: Array, String

function is_palindrome(n){
    let num = n.toString();
    let reverse = '';
    for (let i = 0; i < num.length; i++) {
        reverse = num[i] + reverse;
    };
    return Number(reverse) === n;
}

console.log(is_palindrome(121));