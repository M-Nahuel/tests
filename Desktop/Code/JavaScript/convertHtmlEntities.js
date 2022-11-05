/*Convert the characters &, <, >, " (double quote),
 and ' (apostrophe), in a string to their corresponding HTML entities.*/
 function convertHTML(str) {
    let reemp = "";
    //create a list of characters
    let ent = ["&", "<", ">", "\"", "'"];
    //compare the characters with the input
    let arr = str.split("");
    const test = (element) => ent.indexOf(element)!=-1;
    if (arr.some(test)){
      let temp = "";
      for (let j=0; j<arr.length; j++){
        switch(ent.indexOf(arr[j])){
          case 0: temp = "&amp;";
          break;
          case 1: temp = "&lt;";
          break;
          case 2: temp = "&gt;";
          break;
          case 3: temp = "&quot;";
          break;
          case 4: temp = "&apos;";
          break;
          case -1: temp = arr[j];
          break;
        };
        reemp = reemp + temp;
      }; 
    } else {
      return str;
    };
    return reemp;
  }
  //tests
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Sixty > twelve"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("Schindler's List"));
  console.log(convertHTML("<>"));
  console.log(convertHTML("abc"));