// Topic: Array, Bit Magic, Searching


// Solution 1
// time: O(n) | space: O(1)
function missingNumber(arr) {
    let i, total=1;
    for (i = 2; i < (n+1); i++) {
        total += i;
        total = total - array[i-2];
    }
    return total;
}

console.log(missingNumber([1,2,3,5], 5));