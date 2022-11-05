/*Compare two arrays and return a new array with any items
only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.*/
function diffArray(arr1,arr2){
    const newArr = arr1.concat(arr2);
    let arrfilt = newArr.filter(function (elem){
      return (arr1.indexOf(elem)!=-1 && arr2.indexOf(elem)==-1) || arr1.indexOf(elem)==-1 && arr2.indexOf(elem)!=-1;
    });
    
    return arrfilt;
    }


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));