// Topic: Array

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {integer}
 */

// time: O(n) | space O(1)
class Solution {
    sum(arr,n) {
        let result = 0;
        for (let i = 0; i < n; i++) {
            result += arr[i];
        }
       return result;
    }
}