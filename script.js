console.log("Select an option: \na. Postal Code \nb. Phone num \nc. Enail");

choice = prompt("which option?");

var text ;
let re;
let str = prompt("Enter your input: ");

switch(choice) {
    case "a" :
        text = postTest(re, str);
        break;
    case "b" :
        text = phonenumTest(re, str);
        break;
    case "c" :
        text = emailTest(re, str);
        break;
    default :
        text = "No option selected";
        break;

}

function postTest(re, str) {
    re = /^[0-9]{4}$/;
    if(re.test(str)) {
        return `The postal code: ${str} is valid`;
    }
    else {
        return `The postal code is invalid`;
    }
}
function phonenumTest(re, str) {
    re = /^(\+)?(88)?01[0-9]{9}$/; 
    if(re.test(str)) {
        return `The phone number: ${str} is valid`;
    }
    else {
        return `The phone num is invalid`;
    }
}
function emailTest(re, str) {
    re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
    if(re.test(str)) {
        return `The email: ${str} is valid`;
    }
    else {
        return `The email is invalid`;
    }
}

console.log(text);