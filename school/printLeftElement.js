// Topic: Array

// Solution 1
// time: O(n) | space: O(1)
function leftElement(arr, n) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (arr.length === 1) return arr[0];
        let left = 0;
        let right = arr.length - 1;
        if (i % 2 === 0) {
            arr.splice(right, 1);
        } else {
            arr.splice(left, 1);
        }
    }
};

console.log(leftElement([8, 1, 2, 9, 4, 3, 7, 5], 8));