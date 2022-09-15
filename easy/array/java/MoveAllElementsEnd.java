package easy.array.java;

// Topic: Arrays

class Solution {
    public void segregateElements(int arr[], int n) {
        int count = 0;
        int[] arr2 = new int[n];

        for (int i = 0; i < n; i++) {
            if (arr[i] > 0) {
                arr2[count] = arr[i];
                count++;
            }
        }

        for (int i = 0; i < n; i++) {
            if (arr[i] < 0) {
                arr2[count] = arr[i];
                count++;
            }
        }

        for (int i = 0; i < n; i++) {
            arr[i] = arr2[i];
        }
    }
}