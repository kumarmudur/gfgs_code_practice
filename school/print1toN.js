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
       let X;
       this.count += 1;
       if (this.count === 1) {
         X = N;
       }
       if (N === 0) return;
       this.printNos(N - 1);
       this.num += N + ' ';
       if (N === X) {
        console.log(this.num);
       }
    }
}