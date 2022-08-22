// Topic: Arrays, Stack


/**
 * @param {number[]} arr
 * @param {number} n
*/

class Solution {
    immediateSmaller(arr,n){
       for (var i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            arr[i] = arr[i + 1];
        } else {
            arr[i] = -1;
        }
      }
      return arr;
    }
}

immediateSmaller([5, 6, 2, 3, 1, 7], 6);