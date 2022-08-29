// Topic: Arrays

// Solution
// time: O(n) | space: O(1)
class Solution {
    largest(arr, n) {
       let largest = arr[0];
       
       for (let i = 0; i < n; i++) {
           if (arr[i + 1] > largest) {
               largest = arr[i + 1];
           }
       }
       return largest;
    }
}