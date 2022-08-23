// Topic: Array;

function getMinMax(arr, n) {
    let minNum = arr[0];
    let maxNum = arr[0];
    let i = arr.length;
   
    while (i--) {
        minNum = arr[i] < minNum ? arr[i] : minNum;
        maxNum = arr[i] > maxNum ? arr[i] : maxNum;
    }
    return [minNum, maxNum];
}

getMinMax([3, 2, 1, 56, 10000, 167], 6);