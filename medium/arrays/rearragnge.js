// Topic: Arrays

// Solution 1
// time: O(n) | space: O(n)
function rearrange(arr, n) {
    let result = [];
    let left = 0;
    let right = n - 1;

    while (left < right) {
        result.push(arr[right], arr[left]);
        left++;
        right--;
    }
    return result;
}

rearrange([1,2,3,4,5,6], 6);