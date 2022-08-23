Topic: Arrays, Sorting

// time: O(n) | space: O(n) 
function findElements(arr, n) {
    arr.sort((a, b) => a - b);
    let results = [];

    for (let i = 0; i < n - 2; i++) {
        results.push(arr[i]);
    }
    console.log(results);
}

findElements([2, 8, 7, 1, 5], 5);