// Topic: Arrays, Binary Search, Searching,
// m = 6, n = 6
// arr1[] = {1,2,3,4,7,9}
// arr2[] = {0,1,2,1,1,4}
// Output: 4 5 5 6 6 6

// Solution 1
// time: O(n ^ 2) | space: O(1) |
 function countEleLessThanOrEqual(arr1,arr2,m,n){
    for (let i = 0; i < m; i++) {
        arr1[i] = getCount(arr2, arr1[i]);
    }
    return arr1;
}

const getCount = (arr, val) => {
    let count = 0;
    arr.forEach(item => val >= item && count++);
    return count;
}





console.log(countEleLessThanOrEqual1([1,2,3,4,7,9], [0,1,2,1,1,4], 6, 6));