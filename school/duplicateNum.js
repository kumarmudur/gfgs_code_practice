

function duplicates(a, n) {
     let duplicateNum = [];
     let first = 0;
     for (let i = 1; i < n; i++) {
         if (a[first] === a[i]) {
             duplicateNum.push(a[i]);
             first++;
         }
     }
     console.log(duplicateNum);
     return duplicateNum.length > 0 ? duplicateNum : -1;
 }


console.log(duplicates([2,3,1,2,3], 5));