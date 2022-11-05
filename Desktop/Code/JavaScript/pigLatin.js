/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster,
 move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin.
Input strings are guaranteed to be English words in all lowercase.*/
function translatePigLatin(str){
    let vowels = ["a", "e", "i", "o", "u"];
    let word = "";
    for (let i=0; i<str.length; i++){
        if (vowels.indexOf(str[0])!=-1){
            word = str + "way";
            break;
        } else {
            let cons = "";
            for (let j=0; j<str.length; j++){
                if (vowels.indexOf(str[j])==-1){
                    cons = cons + str[j];
                } else {
                    for (let k=j; k<str.length; k++){
                        word = word + str[k];
                    };
                    break;
                };
            };
            word = word + cons + "ay";
        };
        break;
    };
    return word;
};

//tests
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));