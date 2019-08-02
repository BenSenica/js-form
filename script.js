function submitForm() {
    var uFirstName = document.forms["register"]["firstName"].value;
    var uLastName = document.forms["register"]["lastName"].value;
    var uName = document.forms["register"]["userName"].value;
    var uEmail = document.forms["register"]["email"].value;
    var uPassword = document.forms["register"]["password"].value;
    var uConfirmPassword = document.forms["register"]["confirmPassword"].value;
    var uAddress = document.forms["register"]["address"].value;
    var uCity = document.forms["register"]["city"].value;
    var uZip = document.forms["register"]["zip"].value;
    var uPhone = document.forms["register"]["phone"].value;
    var uAge = document.forms["register"]["age"].value;
    var uHobbies = document.forms["register"]["hobbies"].value;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (uPassword !== uConfirmPassword) {
        alert("Passwords don't match!");
        return false;
    } else if (uPassword.match(passw)) {
        window.location.replace("success.html");
    } else {
        alert("Password must contain at least 1 number and 1 uppercase!");
        return false;
    }

}
