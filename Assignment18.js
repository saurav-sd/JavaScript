// convert the string to the title case.

/*
Example :


*/

const titleCase = (str) => {
    // const arr = str.toLowerCase().split(" ");
    // for (let i = 0; i < arr.length; i++) { 
    //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    // }
    // return arr.join(" ");
    
    return str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(titleCase("the quick brown fox jumped over the lazy dog"));