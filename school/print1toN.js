// Topic: Recursion

/**
 * @param {number} n
 * @returns { }
*/

// time: O(N) | space : O(N) 
class Solution{
    num = '';
    count = 0;
    printNos(N){
       let x;
       this.count += 1;
       if (this.count === 1) {
         x = N;
       }
       if (N === 0) return;
       this.printNos(N - 1);
       this.num += N + ' ';
       if (N === x) {
        console.log(this.num);
       }
    }
}