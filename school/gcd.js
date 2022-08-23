Topic: Math

function gcd(a, b) {
    if (a === 0) return b;
    return gcd(b % a, a);
}

console.log(gcd(3, 6));