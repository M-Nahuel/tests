/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/
function fearNotLetter(str) {
    //create a dictionary
    const az = "abcdefghijklñopqrstuvxyz";
    //test the string
    if (str==az){
        let und;
        return und;
    };
    //loop the string
    for (let i=0; i<str.length; i++){
        if (str.charCodeAt(i)-str.charCodeAt(i-1)>1){
            return(String.fromCharCode(str.charCodeAt(i-1)+1));
        };
    };
};

//tests
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));