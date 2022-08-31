// Topic: Arrays

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} N
 * @returns {boolean}
*/
class Solution {
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        if (A.length !== B.length) return 0;
        A.sort((a, b) => a - b);
        B.sort((a, b) => a - b);
        
        for (let i = 0; i < N; i++) {
           if (A[i] !== B[i]) { 
               return 0;
           } 
        }
        return 1;
    }
}


check([1,2,5,4,0], [2,4,5,0,1], 5);
