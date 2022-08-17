// Topic: Array, Searching

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

// Solution
// time: O(n) | space: O(n)
class Solution{
    valueEqualToIndex(arr,n){
      let results = []
      for (let i = 0; i < n; i++) {
        if (arr[i] === i + 1) results.push(i + 1);
      }
      return results;
    }
}
console.log(valueIndex([15, 2, 45, 12, 7], 5));