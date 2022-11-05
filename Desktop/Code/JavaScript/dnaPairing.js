/*DNA Pairing
Pairs of DNA strands consist of nucleobase pairs.
Base pairs are represented by the characters AT and CG,
which form building blocks of the DNA double helix.
The DNA strand is missing the pairing element.
Write a function to match the missing base pairs for the provided DNA strand.
For each character in the provided string, find the base pair character.
Return the results as a 2d array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array,
and all the arrays are grouped into one encapsulating array.*/
function pairElement (str) {
    //create a list of valid characters
    const characters = {
        "A" : ["A", "T"],
        "T" : ["T", "A"],
        "C" : ["C", "G"],
        "G" : ["G", "C"]
    };
    //check inputs & create an array of the inputs
    let str1 = str.split("");
    let pairs = str1.map(function (cha){
        if (characters.hasOwnProperty(cha)){
            return cha;
        } else {
            return "enter a valid character";
        };
    });
    //loop the array to push the pair elements
    //return the results
    return pairs.map(i=>characters[i]);
};

//test 
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
