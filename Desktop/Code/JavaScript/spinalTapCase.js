/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/
function spinalCase(str) {
    let reg = /\s+|_+/g;
    let str1 = str.replace(/([a-z])([A-Z])/g,"$1 $2");
    return str1.replace(reg,"-").toLowerCase();
};
console.log(spinalCase('This Is S_pinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));