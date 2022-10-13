// Topic: Array


// time: O(N) | space: O(1)
function partyCouple(arr, n) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n;) {
        if (arr[i] !== arr[i + 1]) return arr[i];
        else i += 2;
    }
}

console.log(partyCouple([1, 2, 3, 5, 3, 2, 1, 4, 5, 6, 6], 5));