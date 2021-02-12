console.log("Select an option: \na.Postal Code \nb.Phone num \nc.email");

choice = prompt("WHICH OPTION? : ");

var text;
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


//function to check the validity of postal code
function postTest(re, str) {
    re = /^[0-9]{4}$/;       //regex for postal code
    if(re.test(str)) {
        return `The postal code: ${str} is valid`;
    }
    else {
        return `The postal code: ${str} is invalid`;    
    }
}
//function to check the validity of the phone num
function phonenumTest(re, str) {
    re = /^(\+)?(88)?01[0-9]{9}$/;  //regex for phn num
    if(re.test(str)) {
        return `The phone num: ${str} is valid`;
    }
    else {
        return `The phone num: ${str} is invalid`;    
    }
}
//function to check the validity of the email
function emailTest(re, str) {
    re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
    if(re.test(str)) {
        return `The email: ${str} is valid`;
    }
    else {
        return `The email: ${str} is invalid`;    
    }
}

console.log(text);

