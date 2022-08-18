// Topic: String

/**
 * @param {String} S
 * @returns {String}
*/

class Solution{
    delAlternate(S){
        let str = '';
       for (let i = 0; i < S.length; i++) {
           if (i % 2 === 0) {
               str += S[i];
           }
       }
       return str;
    }
}