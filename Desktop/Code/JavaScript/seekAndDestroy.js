/*You will be provided with an initial array (the first argument in the destroyer function),
 followed by one or more arguments.
  Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.*/
function destroyer (arr) {
    let resto = []
    for (let i=1; i<arguments.length; i++){
        resto.push(arguments[i])
    }
    let total = arr.concat(resto)
    function filtro (elem){
        if (resto.indexOf(elem)===-1||arr.indexOf(elem)===-1){
            return elem;
        }
    }
    return total.filter(filtro)
}
console.log(destroyer([1,2,3,1,2,3],2,3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog",
 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum",
  "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));