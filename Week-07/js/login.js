window.onload = function () {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  var emailError2 = document.getElementById("email-error-2");

  emailInput.addEventListener("blur", function () {
    if (emailInput.value === "") {
      emailError.style.display = "flex";
    } else {
      emailError.style.display = "none";
    }
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailInput.value)) {
      emailError2.style.display = "flex";
    } else {
      emailError2.style.display = "none";
    }
  });

  emailInput.onfocus = function () {
    emailError.style.display = "none";
    emailError2.style.display = "none";
  };

  var inputPass = document.querySelector("#pass");
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

  inputPass.addEventListener("blur", function () {
    if (inputPass.value === "") {
      passError.style.display = "flex";
    } else {
      passError.style.display = "none";
    }

    if (!hasNumbersAndChar(inputPass.value)) {
      passError2.style.display = "flex";
    } else {
      passError2.style.display = "none";
    }
  });

  inputPass.onfocus = function () {
    passError.style.display = "none";
    passError2.style.display = "none";
  };

  var buttonLogin = document.querySelector(".button-login");
  var emailInput = document.querySelector("#email");
  var inputPass = document.querySelector("#pass");
  var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  buttonLogin.onclick = function (e) {
    e.preventDefault();
    if (emailInput.value === "" || inputPass.value === "") {
      alert("Complete the fields");
    } else {
      if (regex.test(emailInput.value) && hasNumbersAndChar(inputPass.value)) {
        alert(`Email: ${emailInput.value} Password: ${inputPass.value}`);
      }
      if (!regex.test(emailInput.value)) {
        alert("Email: Enter a valid email address");
      }
      if (!hasNumbersAndChar(inputPass.value)) {
        alert("Password: Password must contain letters and numbers");
      }
    }
  };
};
