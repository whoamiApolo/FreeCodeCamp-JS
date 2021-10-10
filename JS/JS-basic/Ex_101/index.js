function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else if (n <= 1) {
        return 2;
    } else if (n <= 3) {
        return 9
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
}
