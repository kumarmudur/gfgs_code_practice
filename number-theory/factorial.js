// Topic: Combinatorial, number-theory, strings 

/**
 * @param {number} N
 * @return {number[]}
*/

// time: O(n) | space: O(N)
class Solution {
    factorial(N){
        let fact = BigInt(1);
        for (let i = BigInt(1); i <=BigInt(N); i++) {
            fact = fact * i;
        }
        return fact.toString();
    }
}
