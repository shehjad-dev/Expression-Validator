//REGEX-2
var text;
let re;
let str;

var options = document.getElementsByClassName('option');

var heading = document.getElementsByClassName('option-header')[0];
var optionContainer = document.getElementsByClassName('option-container')[0];
var Container = document.getElementsByClassName('container')[0];

var extrabit = document.getElementsByClassName('new-ui-container')[0];
extrabit.style.background = 'none'; 

//app info
var infoButtn = document.getElementsByClassName('info-btn')[0];
infoButtn.addEventListener('click', displayInfo);
//app info
function displayInfo() {
    const resultUi = document.createElement('div');
    resultUi.classList.add('result-ui');
    const resultMsg = document.createElement('h2');
    resultMsg.classList.add('result-msg');
    resultMsg.innerHTML = `It is an Expression Validator based on <a class="country-link" href="https://globaledge.msu.edu/countries/bangladesh#:~:text=Bangladesh%20is%20a%20country%20in,rivers%20flowing%20from%20the%20Himalayas." target="_blank">Bangladesh</a>.So, <br> Phone Number Demo: +8801(9 digits)or 8801(9 digits) or 01(9 digits)<br> Postal Code Demo: (4 digits)`;
    resultUi.appendChild(resultMsg);

    const tohomeBtn = document.createElement('button');
    tohomeBtn.classList.add('backto-home');
    /* tohomeBtn.innerHTML = `Go to Home`; */
    tohomeBtn.innerHTML = `<i class="fas fa-home"></i>`;
    tohomeBtn.addEventListener('click', homeClicked);
     
    resultUi.appendChild(tohomeBtn);

    Container.appendChild(resultUi);
    document.getElementsByClassName('option-header')[0].style.display = 'none';
    document.getElementsByClassName('option-container')[0].style.display = 'none';
    document.getElementsByClassName('new-ui-container')[0].style.display = 'none';
}



for(var i=0; i<options.length; i++) {
    let option = options[i];
    option.addEventListener('click', optionClicked);
}
//1st funtion-when option clicked
function optionClicked(e) {
    document.getElementsByClassName('info-btn')[0].style.display = 'none';
    choice = e.target.innerText;
    heading.innerText = `${e.target.innerText}`;
    optionContainer.style.display = 'none';
    var testUI = document.createElement('input');
    testUI.type = 'text';
    testUI.classList = 'user-input';
    testUI.value = '0'; 
    var newUI = document.getElementsByClassName('new-ui-container')[0];
    
    var validateBtn = document.createElement('button');
    validateBtn.classList = 'validate-btn';
    validateBtn.innerText = 'Validate';



    newUI.appendChild(testUI);
    newUI.appendChild(validateBtn);
    
    
    validateBtn.addEventListener('click', validateClicked);
    
    /* backPage.addEventListener('click', doThirdthing); */

    

}

function homeClicked() {
    window.location.reload(); 
}

//switch
//2nd function- do the regex checking through switch statement
function validateClicked() {
   
    switch(choice) {
        case "Postal Code" :
            str = document.getElementsByClassName('user-input')[0].value;
            /* console.log('case a', str) */
            text = postTest(re, str);
            break;
        case "Phone Num" :
            str = document.getElementsByClassName('user-input')[0].value;
            /* console.log('case b', str) */
            text = phonenumTest(re, str);
            break;
        case "Email" :
            str = document.getElementsByClassName('user-input')[0].value;
            /* console.log('case c', str) */
            text = emailTest(re, str);
            break;
        default : 
            text = "No option selected";
            break;
    
    }
    displayResult(text);
    /* console.log(text); */

}

//display result in ui
function displayResult(text) {
    const resultUi = document.createElement('div');
    resultUi.classList.add('result-ui');
    const resultMsg = document.createElement('h2');
    resultMsg.classList.add('result-msg');
    resultMsg.innerHTML = `${text}`;
    resultUi.appendChild(resultMsg);

    const tohomeBtn = document.createElement('button');
    tohomeBtn.classList.add('backto-home');
    /* tohomeBtn.innerHTML = `Go to Home`; */
    tohomeBtn.innerHTML = `<i class="fas fa-home"></i>`;
    tohomeBtn.addEventListener('click', homeClicked);
     
    resultUi.appendChild(tohomeBtn);

    Container.appendChild(resultUi);
    document.getElementsByClassName('option-header')[0].style.display = 'none';
    document.getElementsByClassName('new-ui-container')[0].style.display = 'none';
    

}


//function to check the validity of postal code
function postTest(re, str) {
    re = /^[0-9]{4}$/;       //regex for postal code
    if(re.test(str)) {
        return `The postal code: <span class="item">${str}</span> is valid`;
    }
    else {
        return `The postal code: <span class="item">${str}</span> is invalid`;    
    }
}
//function to check the validity of the phone num
function phonenumTest(re, str) {
    re = /^(\+)?(88)?01[0-9]{9}$/;  //regex for phn num
    if(re.test(str)) {
        return `The phone num: <span class="item">${str}</span> is valid`;
    }
    else {
        return `The phone num: <span class="item">${str}</span> is invalid`;    
    }
}
//function to check the validity of the email
function emailTest(re, str) {
    re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
    if(re.test(str)) {
        return `The email: <span class="item">${str}</span> is valid`;
    }
    else {
        return `The email: <span class="item">${str}</span> is invalid`;    
    }
}
