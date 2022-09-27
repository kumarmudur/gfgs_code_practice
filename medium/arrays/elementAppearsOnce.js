

/**
 * @param {number[]} a
 * @param {number} N
 * @returns {number}
*/

// time: O(n) | space: O(1)
class Solution {
    search(a,N) {
        a.sort((a, b) => a - b);
        
        for (let i = 0; i < N; i += 2) {
            if (a[i] !== a[i + 1]) return a[i];
        }
    }
}