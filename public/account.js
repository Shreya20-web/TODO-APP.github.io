 // js for toggle form

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

  function register(){

    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";

} 

  function login(){

    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";

}


//form validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const usernameL = document.getElementById('usernameL');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordL = document.getElementById('passwordL');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const smalll = formControl.querySelector('small');
    smalll.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isValidEmail(){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email.value).toLowerCase());
}

//event listener
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === ''){
        showError(username, "Username is required");
    }
    else{
        showSuccess(username);
    }

    if(usernameL.value === ''){
        showError(usernameL, "Username is required");
    }
    else{
        showSuccess(usernameL);
    }

    if(email.value === ''){
        showError(email, "email is required");
    }
    else if (!isValidEmail(email.value)) {
        showError(email, 'enter a valid email id')
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'password is required');
    }
    else{
        showSuccess(password);
    }

    if(passwordL.value === ''){
        showError(passwordL, 'password is required');
    }
    else{
        showSuccess(passwordL);
    }
});

function reDirect(){
    if(localStorage.getItem('isLoggedIn')=== false)
    window.location.pathname="/login.html"
    
    else{
        window.location.pathname="/index.html"
        localStorage.setItem('isLoggedIn')=true;
    }
}