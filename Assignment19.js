// convert the time into 24hr format.
// convertTo24HrsFormat("12:33PM"); // 12:33
// convertTo24HrsFormat("01:59PM"); // 13:59
// convertTo24HrsFormat("11:9PM"); // 23:08

const convertTo24HrsFormat = (timeText) => {
    const timeTextLower = timeText.toLowerCase();
    let [hours, mins] = timeTextLower.split(':');

    if (timeTextLower.endsWith("am")){
        hours = hours === "12" ? "0" : hours;
    } else if (timeTextLower.endsWith("pm")) { 
        hours = hours === "12" ? hours : String(+hours + 12);
    }

    return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
}

console.log(convertTo24HrsFormat("12:33AM"));

// console.log("12".padStart(2, 0))
// console.log("10am".slice(0,-2));