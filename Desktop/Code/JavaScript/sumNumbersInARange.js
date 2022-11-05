/* We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10
because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr){
    arr.sort(function(a,b){
        return a - b;
    });
    function rec(n){
        if (n<1){
            return [];
        } else {
            const newArr = rec(n-1);
            newArr.push(n);
            return newArr;
        };
    };
    let summ = 0;
    let sum = rec(arr[arr.length-1]);
    function suma(sum){
        for (let i=0; i<sum.length; i++){
            summ += sum[i];
        };
        return summ;
    };
    return suma(sum);
};
//test
console.log(sumAll([4,1]));
console.log(sumAll([5,10]));