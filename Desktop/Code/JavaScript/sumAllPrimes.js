/*A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2.
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

function sumPrimes(num) {
    let sum = 0;
    function checkPrimes(numero){
        let primo = true;
        for (let j=2; j<=Math.sqrt(numero); j++){
            if (numero % j == 0){
                primo = false;
            };
        };
        return primo;
    };
    for (let i=2; i<=num; i++){
        if (checkPrimes(i)){
            sum += i;
        };
    };
    return sum;
};
//Tests
console.log(sumPrimes(10));
console.log(sumPrimes(977));