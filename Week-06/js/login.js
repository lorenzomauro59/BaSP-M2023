window.onload = function () {
  var inputEmail = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  var emailError2 = document.getElementById("email-error-2");

  inputEmail.addEventListener("blur", function () {
    if (inputEmail.value === "") {
      emailError.style.display = "flex";
    } else {
      emailError.style.display = "none";
    }
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(inputEmail.value)) {
      emailError2.style.display = "flex";
    } else {
      emailError2.style.display = "none";
    }
  });

  inputEmail.onfocus = function () {
    emailError.style.display = "none";
    emailError2.style.display = "none";
  };

  var passInput = document.querySelector("#pass");
  var passError = document.getElementById("pass-error");
  var passError2 = document.getElementById("pass-error-2");

  function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < myString.length; x++) {
      if (numbers.includes(myString[x])) {
        return true;
      }
    }
    return false;
  }

  function hasNumbersAndChar(myString) {
    var num = 0;
    var char = 0;

    for (var x = 0; x < myString.length; x++) {
      if (hasNumbers(myString[x])) {
        num++;
      } else {
        char++;
      }
      if (num > 0 && char > 0) {
        return true;
      }
    }
    return false;
  }

  passInput.addEventListener("blur", function () {
    if (passInput.value === "") {
      passError.style.display = "flex";
    } else {
      passError.style.display = "none";
    }

    if (!hasNumbersAndChar(passInput.value)) {
      passError2.style.display = "flex";
    } else {
      passError2.style.display = "none";
    }
  });

  passInput.onfocus = function () {
    passError.style.display = "none";
    passError2.style.display = "none";
  };

  var buttonLogin = document.querySelector(".button-login");
  var emailInput = document.querySelector("#email");
  var passInput = document.querySelector("#pass");
  var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  buttonLogin.onclick = function (e) {
    e.preventDefault();
    if (emailInput.value === "" || passInput.value === "") {
      alert("Complete the fields");
    } else {
      if (regex.test(emailInput.value) && hasNumbersAndChar(passInput.value)) {
        alert(`Email: ${emailInput.value} Password: ${passInput.value}`);
      }
      if (!regex.test(emailInput.value)) {
        alert("Enter a valid email address");
      }
      if (!hasNumbersAndChar(passInput.value)) {
        alert("Password must contain letters and numbers");
      }
    }
  };
};
