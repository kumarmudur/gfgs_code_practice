// Topic: Mathematical, number-theory

/**
 * @param {number} n
 * @return {number}
*/

function convertFive(n) {
    let newNum = n.toString().split('');
    let result = [];
    for (let i = 0; i < newNum.length; i++) {
        if (newNum[i] == 0) result.push(5);
        else result.push(newNum[i]);
    }
    return result.join('');
}

console.log(convertFive(1004));