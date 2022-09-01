// Topic: String, Two Pointers

/**
 * @param {string} S
 * @return {number}
*/

class Solution {
    
    isPalindrome(S){
       let left = 0;
       let right = S.length - 1;
       
       while (left < right) {
           if (S[left] !== S[right]) return 0;
           else { 
               left++;
               right--;
           }
       }
       return 1;
    }
}