// Topic: Array

// Solution
// time: O(n) | space: O(n) 
function printArray(arr, n) {
    let results = [];
    for (let i = 0; i < n; i++) {
        results.push(arr[i]);
    }
    console.log(results.join(' '));
}

printArray([1, 2, 3, 4, 5], 5);