// Topic: Strings

function removeVowels(s){
    let map = { 'a': 'a', 'e': 'e', 'i': 'i', 'o': 'o', 'u': 'u' };

    let result = ''
    for (let i = 0; i < s.length; i++) {
        if(s[i] !== map[s[i]]) {
          result += s[i];
        }
    }
    return result;
};

console.log(removeVowels('<$uo?.*>'));