// Topic: Numbers

class Solution {
    static long countDigits(long a, long b) {
        long product = a * b;
        int count = 0;

        while (product != 0) {
            product = product / 10;
            ++count;
        }
        return count;
    }
}
