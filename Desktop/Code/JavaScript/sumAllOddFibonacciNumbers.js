/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) 
{
  let fib = [1,1];
  let sum = 1;
  for (let i=1; fib[i-1]<=num;i++){
    fib.push(fib[i]+fib[i-1]);
    if((fib[i]<=num)&&(fib[i]%2!=0)){
      sum+=fib[i];
    }
  }
  return sum;

}

console.log(sumFibs(10));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));