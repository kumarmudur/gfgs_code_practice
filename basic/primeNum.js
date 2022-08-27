// Topic: Math

function isPrime(n){
    if(n===1) return 0;
    let count=0;
    for(let i=0; i<= Math.sqrt(n); i++){
        if(n%i===0){
            count++;
        }
    }
    if(count<=1) return 1;
    else return 0;
}

console.log(isPrime(5));