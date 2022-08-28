// Topic: Arrays, Searching

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {integer}
 */

// time: O(n) | space: O(1)
class Solution {
    search(arr, n, k) {
       for (let i = 0; i < n; i++) {
           if (arr[i] === k) {
               return i + 1;
           }
       }
       return -1;
    }
}