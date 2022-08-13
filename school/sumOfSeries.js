// Topic: Arrays, Mathematical
// Input N = 5 => 15
// Input N = 1 => 1;

/**
 * @param {number} n
 * @return {integer}
 */
// Solution 1
// time: O(n) | space: O(n)
class Solution {
    seriesSum(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
}

console.log(seriesSum(5));