// Topic: Arrays, Divide & Conquer, Searching

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    binarySearch(arr, n, k) {
       let left = 0;
       let right = n - 1;
        
       while (left <= right) {
           let mid = Math.floor((left + right) / 2);
           if (arr[mid] === k) return mid;
           else if (arr[mid] < k) left = mid + 1;
           else right = mid - 1;
       }
       return -1;
    }
}

 console.log(binarySearch([1, 2, 3, 4, 5], 5, 4));