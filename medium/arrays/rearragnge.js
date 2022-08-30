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

// Solution 2
// time: O(n) | space: O(1)
function rearrange(arr, n) {
    let result = [...arr];
    let left = 0;
    let right = n - 1;
       
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            arr[i] = result[right];
            right--;
        } else {
            arr[i] = result[left];
            left++;
        }
    }
    return arr;
}

rearrange([1,2,3,4,5,6], 6);