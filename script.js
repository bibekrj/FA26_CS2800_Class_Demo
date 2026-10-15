// let user_input = prompt("Enter a number: ");
// console.log(typeof user_input);

// if (user_input===20){
//     console.log("number matched")
// }

let alive = true;
let user_input;

while (alive === true) {
    user_input = prompt("Enter your password");
    if (user_input == "123456") {
        alive = false;
    }
}

console.log("While Loop counts")
let i = 0;

while (i < 10) {
    console.log(i)
    i += 1;
}


console.log("For loop counts")
for (let j = 0; j < 10; j++) {
    console.log(j);
}


