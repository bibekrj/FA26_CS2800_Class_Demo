// // let user_input = prompt("Enter a number: ");
// // console.log(typeof user_input);

// // if (user_input===20){
// //     console.log("number matched")
// // }

// let alive = true;
// let user_input;

// while (alive === true) {
//     user_input = prompt("Enter your password");
//     if (user_input == "123456") {
//         alive = false;
//     }
// }

// console.log("While Loop counts")
// let i = 0;

// while (i < 10) {
//     console.log(i)
//     i += 1;
// }


// console.log("For loop counts")
// for (let j = 0; j < 10; j++) {
//     console.log(j);
// }


function sayHello(){
    // alert("Alert hello world")
    console.log("Hello World");
}


function changeColor(){
    let targetHtml = document.getElementById("changeMe");
    targetHtml.style.color = "red";
    targetHtml.innerHTML = "Test complete";
    targetHtml.style.fontStyle = "italic";


    // document.getElementById("changeMe").style.color = "red";
    // document.getElementById("changeMe").innerHTML = "Test Complete";
}
// sayHello();


// function to get form date and print to console
// no parameters
// uses document.forms and form.elements to correctly target the form elements
function getFormData(){
    let form = document.forms["contactform"];

    let firstName = form.elements["first_name"].value;
    console.log(firstName);
  
}