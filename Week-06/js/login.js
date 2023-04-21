window.onload = function () {
  var emailInput = document.querySelector("#email");
  var errorElement = document.getElementById("emailError");
  var errorElement2 = document.getElementById("emailError-2");

  emailInput.onblur = function () {
    if (emailInput.value === "") {
      errorElement.textContent = "The field is required";
      emailInput.focus();
    } else {
      errorElement.textContent = "";
    }

    var emailExpression = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!emailExpression.test(emailInput.value)) {
      errorElement2.textContent = "Enter a valid email address";
      emailInput.focus();
    } else {
      errorElement2.textContent = "";
    }

    // emailInput.onfocus = function () {
    //   errorElement.textContent = "";
    //   errorElement2.textContent = "";
    // };
  };
};
