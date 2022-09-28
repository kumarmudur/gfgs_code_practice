// Topic: String, Hash

// time: O(n) | space: O(n)
class Solution {
    firstRepChar(s) {
     let set = new Set();
     for (let i = 0; i < s.length; i++) {
      if(set.has(s[i])) return s[i];
       else set.add(s[i]);
     }
     return -1;
  }
}