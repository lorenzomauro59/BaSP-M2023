window.onload = function () {
  var emailInput = document.querySelector("#email");
  var errorElement = document.getElementById("emailError");
  var errorElement2 = document.getElementById("emailError-2");

  emailInput.onblur = function () {
    if (emailInput.value === "") {
      errorElement.style.display = "flex";
    } else {
      errorElement.style.display = "none";
    }

    var emailExpression = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!emailExpression.test(emailInput.value)) {
      errorElement2.style.display = "flex";
    } else {
      errorElement2.style.display = "none";
    }

    emailInput.onfocus = function () {
      errorElement.style.display = "none";
      errorElement2.style.display = "none";
    };
  };

  var passInput = document.querySelector("#pass");
  var errorPass = document.getElementById("passError");
  var errorPass2 = document.getElementById("passError-2");

  passInput.onblur = function () {
    if (passInput.value === "") {
      errorPass.style.display = "flex";
    } else {
      errorPass.style.display = "none";
    }

    var passExpression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passExpression.test(passInput.value)) {
      errorPass2.style.display = "flex";
    } else {
      errorPass2.style.display = "none";
    }

    passInput.onfocus = function () {
      errorPass.style.display = "none";
      errorPass2.style.display = "none";
    };
  };

  var buttonLogin = document.querySelector(".button-login");
  var emailInput = document.querySelector("#email");
  var passInput = document.querySelector("#pass");
  var emailExpression = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var passExpression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  buttonLogin.onclick = function (e) {
    e.preventDefault();
    if (emailInput.value === "" || passInput.value === "") {
      alert("Complete the fields");
    } else {
      if (
        emailExpression.test(emailInput.value) &&
        passExpression.test(passInput.value)
      ) {
        alert(`Email: ${emailInput.value} Password: ${passInput.value}`);
      } else {
        alert("Complete the fields correctly");
      }
    }
  };
};
