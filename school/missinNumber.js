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

// Solution 2
// time: O(n) | space: O(1)
function missingNumber(array,n){
    let total = Math.floor(n * (n + 1) / 2);
    console.log(total);
    for (let i = 0; i < n - 1; i++) {
        console.log('inside loop', total);
        console.log('inside loop', i);
        total -= array[i];
    }   
    return total;
}

console.log(missingNumber([1,2,3,5], 5));