// Topic: Matrix

// time: O(N * M) | space: O(1)
function sumOfMatrix(N, M, grid) {
    let sum = 0;
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < M; j++) {
            sum += grid[i][j];
        }
    }
    return sum;
} 

sumOfMatrix(2, 3, [[1,0,1], [-8,9,-2]]);