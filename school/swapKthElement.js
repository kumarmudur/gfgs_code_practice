//Arrays

// Solution 1
function swapKth(arr, n, k) {
    let temp = arr[k-1]
    arr[k-1] = arr[n-k]
    arr[n-k] = temp;
    return arr;
}

// Solution 2
function swapKth(arr, n, k) {
    let left = k - 1;
    let right = n - k;
    let tmpLeft;
    let tmpRight;
    for (let i = 0; i < arr.length; i++) {
        if (i === left) {
            tmpLeft = arr[i];
            arr[i] = tmpRight ? tmpRight : arr[right];
        } else if (i === right) {
            tmpRight = arr[i];
            arr[i] = tmpLeft ? tmpLeft : arr[left];
        }
    }
   return arr;
}

swapKth([5, 3, 6, 1, 2], 5, 2)