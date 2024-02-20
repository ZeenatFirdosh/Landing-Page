function validateForm() {
  // var name = document.myform.name.value;
  // var password = document.myform.password.value;
  // var name = document.forms.SignUpForm.username.value;
  // if (name == null || name == "") {
  //   alert("Name can't be blank");
  //   return false;
  // } else if (password.length < 6) {
  //   alert("Password must be at least 6 characters long.");
  //   return false;
  // }

  event.preventDefault();
  var name = document.forms.myForm.username.value;

  var email = document.forms.myForm.email.value;

  var phone = document.forms.myForm.phone.value;


  var usernameError = document.getElementById("usernameError");
  var emailError = document.getElementById("emailError");
  var phoneError = document.getElementById("phoneError");

  // Reset errors
  usernameError.innerHTML = "";
  emailError.innerHTML = "";
  phoneError.innerHTML = "";

  // Javascript reGex for Name validation
  var regName = /^[a-zA-Z\-]+$/;
  var phoneno = /^\d{10}$/;
  //Javascript reGex for Email Validation.
  var regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    name == "" ||
    !regName.test(name) ||
    email == "" ||
    !regEmail.test(email) ||
    phone == "" ||
    phone.length > 10 ||
    !(phone.match(phoneno))
  ) {
    if (name == "" || !regName.test(name)) {
      usernameError.innerHTML = "Only characters A-Z, a-z and '-' are  acceptable.";
      console.log("usernameError");
    }
    if (email == "" || !regEmail.test(email)) {
      emailError.innerHTML = "Invalid email address";
      console.log("Invalid email address");

    }

    if (phone == "") {
      phoneError.innerHTML = "Phone must be at least 10 digits";
      console.log("Phone must be at least 10 digits");

    }

    if (phone.length > 10) {
      phoneError.innerHTML = "Phone must be  10 digits";
      console.log("Phone must be  10 digits");

    }

    if(!phone.match(phoneno)){
      phoneError.innerHTML = "Invalid Phone number ";
      console.log("Invalid Phone number ");

    }
    console.log("invalid authentication");

    return false;
  } else {
    console.log("valid authentication");
    window.location.href = "http://127.0.0.1:5500/ThankYou.html";
  }
  return true;
}
function validateForm2() {
  // var name = document.myform.name.value;
  // var password = document.myform.password.value;
  // var name = document.forms.SignUpForm.username.value;
  // if (name == null || name == "") {
  //   alert("Name can't be blank");
  //   return false;
  // } else if (password.length < 6) {
  //   alert("Password must be at least 6 characters long.");
  //   return false;
  // }

  event.preventDefault();
  var name = document.forms.myHireForm.username.value;

  var email = document.forms.myHireForm.email.value;

  var phone = document.forms.myHireForm.phone.value;


  var usernameError = document.getElementById("username2Error");
  var emailError = document.getElementById("email2Error");
  var phoneError = document.getElementById("phone2Error");

  // Reset errors
  usernameError.innerHTML = "";
  emailError.innerHTML = "";
  phoneError.innerHTML = "";

  // Javascript reGex for Name validation
  var regName = /^[a-zA-Z\-]+$/;
  var phoneno = /^\d{10}$/;
  //Javascript reGex for Email Validation.
  var regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    name == "" ||
    !regName.test(name) ||
    email == "" ||
    !regEmail.test(email) ||
    phone == "" ||
    phone.length > 10 ||
    !(phone.match(phoneno))
  ) {
    if (name == "" || !regName.test(name)) {
      usernameError.innerHTML = "Only characters A-Z, a-z and '-' are  acceptable.";
      console.log("usernameError");
    }
    if (email == "" || !regEmail.test(email)) {
      emailError.innerHTML = "Invalid email address";
      console.log("Invalid email address");

    }

    if (phone == "") {
      phoneError.innerHTML = "Phone must be at least 10 digits";
      console.log("Phone must be at least 10 digits");

    }

    if (phone.length > 10) {
      phoneError.innerHTML = "Phone must be  10 digits";
      console.log("Phone must be  10 digits");

    }

    if(!phone.match(phoneno)){
      phoneError.innerHTML = "Invalid Phone number ";
      console.log("Invalid Phone number ");

    }
    console.log("invalid authentication");

    return false;
  } else {
    console.log("valid authentication");
    window.location.href = "http://127.0.0.1:5500/ThankYou.html";
  }
  return true;
}
