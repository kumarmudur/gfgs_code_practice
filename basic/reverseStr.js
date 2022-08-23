// Topic: String

/**
 * @param {string} str
 * @return {string}
*/

class Solution {
    
    reverseWord(str) {
        let reverse = '';
        
        for (let char of str) {
            reverse = char + reverse;
        }
        return reverse;
    }
}