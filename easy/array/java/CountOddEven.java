package easy.array.java;

// Topic: Arrays

class Solution {
    public void countOddEven(int[] arr, int n) {
        int countEven = 0;
        int countOdd = 0;

        for (int i = 0; i < n; i++) {
            if (arr[i] % 2 == 0)
                countEven++;
            else
                countOdd++;
        }
        System.out.println(countOdd + " " + countEven);
    }
}