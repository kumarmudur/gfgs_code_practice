

function find_median(arr){
    arr.sort((a, b) => a - b);
    console.log(arr);
    for(var i = 0; i < arr.length; i++) {
        if (arr.length % 2 === 0) {
            console.log('even');
        } else {
            median = arr.length / 
            console.log('odd');
        }
    }
}



find_median([90, 100, 78, 89, 67]);