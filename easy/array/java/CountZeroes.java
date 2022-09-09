package easy.array.java;

// Topic: Arrays, Searching

// time: O(n) | space: O(1)
class Solution {
    int countZeroes(int[] arr, int n) {
        int countZeros = 0;

        for (int i = 0; i < n; i++) {
            if (arr[i] == 0)
                countZeros++;
        }
        return countZeros;
    }
}
