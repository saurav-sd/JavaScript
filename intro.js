// is prime

let num = 23;
let flag = true;
for (let i = 2; i < num; i++) { 
    if (num % i == 0) {
        flag = false;
        break;
    }
}

if (flag == true) { 
    console.log(num + " is prime");
} else {
    console.log(num + " is not prime");
}

