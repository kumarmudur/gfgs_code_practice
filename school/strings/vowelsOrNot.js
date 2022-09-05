

function isVowel(c) {
    const vowels = { 'a': 'a', 'A': 'A', 'e': 'e', 'E': 'E', 'i': 'i', 'I': 'I', 'o': 'o', 'O': 'O', 'u': 'u', 'U': 'U'};
    if (vowels[c]) return 'YES';
    return 'NO';
}

console.log(isVowel('T'));