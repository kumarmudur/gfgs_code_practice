// Topic: Strings

/**
 * @param {string} s
 * @returns {string}
*/

class Solution{
    transform(s){
       let newStr = s.split(' ');
       for (let i = 0; i < newStr.length; i++) {
           if(newStr[i].charAt(0)) {
             newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
           }
       }
       return newStr.join(' ');
    }
}

