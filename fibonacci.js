function fibonacci (n) {
    let a = 0;
    let b = 1;
    let output = 0;
    
    for (let i=2; i<=n; i++) {
        output = a + b;
        a = b;
        b = output;

    }
    return output


}

const t = fibonacci(2);
console.log(t)


