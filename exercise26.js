function fibonacci(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}

console.log(fibonacci(20));