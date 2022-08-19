//Arrays

// Solution 1
function swapKth(arr, n, k) {
    let temp = arr[k-1]
    arr[k-1] = arr[n-k]
    arr[n-k] = temp;
    return arr;
}


swapKth([5, 3, 6, 1, 2], 5, 2)