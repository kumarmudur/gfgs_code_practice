// Topic: Array



// Solution 1
// time: O(n) | space: O(1)
function findIndex(a,n,key) {
    let firstIdx;
    let lastIdx;
    for (let i = 0; i < n; i++) {
        if (a[i] === key) {
            firstIdx =  firstIdx || firstIdx === 0 ? firstIdx : i;
            lastIdx = firstIdx || firstIdx === 0 ? i : firstIdx;
        } 
    }
    firstIdx = firstIdx || firstIdx === 0 ? firstIdx : -1;
    lastIdx = lastIdx || lastIdx === 0 ? lastIdx : -1;
    return [firstIdx, lastIdx];
}

findIndex([23, 11, 24, 20, 22, 18, 30, 22, 14, 21, 15, 23, 11, 21, 14, 21, 28], 17, 23);