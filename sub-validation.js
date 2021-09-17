
const button = document.querySelector('button');

// Invalid Email, works
function validate() {
    var text = document.getElementById("text").value;

    var regx = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;

    if (regx.test(text)) {

        document.getElementById("lbltext").style.visibility = "hidden";
        return true;

    }
    else {

        document.getElementById("lbltext").innerHTML = "Please provide a valid e-mail address";
        document.getElementById("lbltext").style.visibility = "visible";
        return false;
    }
}

// Email address required, kinda works
function empty() {
    var input = document.getElementById("text").lenght;

    if (input == "") {

        document.getElementById("lbltext").style.visibility = "hidden";
        return true;

    }
    else {
        document.getElementById("lbltext").innerHTML = "Email address is required";
        document.getElementById("lbltext").style.visibility = "visible";
        return false;
    }
}

// Checkbox is not marked, doesn't work!
function checkbox() {
    const checkbox = document.getElementById('checkbox')


    if (checkbox.checked == true) {

        return true;
    }
    else {
        document.getElementById("lbltext").innerHTML = "You must accept the terms and conditions";
        document.getElementById("lbltext").style.visibility = "visible";
        return false;
    }

}

// successful validation, couldn't figure the right way to do it.
function message() {
    const subscribe = document.getElementById("subscribe");
    const email = document.getElementById("email");
    const message = document.getElementById("message");


}
