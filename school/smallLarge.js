// Topic: Arrays

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
*/

class Solution{
    getMoreAndLess(arr, n, x){
        let smaller = [];
        let larger = [];
    
        for(let i = 0; i < n; i++) {
            if (arr[i] === x) {
                larger.push(arr[i]);
                smaller.push(arr[i]);
            }
            else if (arr[i] > x) {
                larger.push(arr[i]);
            } else if (arr[i] < x) {
                smaller.push(arr[i]);
            }
        }
        return [smaller.length, larger.length];
    }
}

console.log(getMoreAndLess([1, 2, 8, 10, 11, 12, 19], 7, 0));