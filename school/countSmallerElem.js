// Topic: Array

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
*/

class Solution{
    countOfElements(arr,n, x){
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] <= x) {
                count++;
            }
        }
        return count;
    }
}
countOfElements([1, 2, 4, 5, 8, 10], 6, 9);   