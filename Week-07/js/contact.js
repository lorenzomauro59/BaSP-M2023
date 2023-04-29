window.onload = function () {
  var inputName = document.getElementById("name");
  var nameError = document.getElementById("name-error");
  var nameError2 = document.getElementById("name-error-2");

  function moreThan3Char() {
    var nameValue = inputName.value.trim();
    if (nameValue.length <= 3) {
      return true;
    } else {
      return false;
    }
  }

  function lettersOnly() {
    var inputValue = inputName.value;

    for (var i = 0; i < inputValue.length; i++) {
      var charCode = inputValue.charCodeAt(i);
      if (
        !(charCode > 64 && charCode < 91) &&
        !(charCode > 96 && charCode < 123)
      ) {
        return true;
      }
    }
  }

  inputName.addEventListener("blur", function () {
    if (inputName.value === "") {
      nameError.style.display = "flex";
    } else {
      nameError.style.display = "none";
    }

    if (moreThan3Char(inputName.value)) {
      nameError2.style.display = "flex";
    } else if (lettersOnly(inputName.value)) {
      nameError2.style.display = "flex";
    } else {
      nameError2.style.display = "none";
    }
  });

  inputName.onfocus = function () {
    nameError.style.display = "none";
    nameError2.style.display = "none";
  };

  var inputLastName = document.getElementById("l-name");
  var lnameError = document.getElementById("lname-error");
  var lnameError2 = document.getElementById("lname-error-2");

  function moreThan3CharLn() {
    var nameValue = inputLastName.value.trim();
    if (nameValue.length <= 3) {
      return true;
    } else {
      return false;
    }
  }

  function lettersOnlyLn() {
    var inputValue = inputLastName.value;

    for (var i = 0; i < inputValue.length; i++) {
      var charCode = inputValue.charCodeAt(i);
      if (
        !(charCode > 64 && charCode < 91) &&
        !(charCode > 96 && charCode < 123)
      ) {
        return true;
      }
    }
  }

  inputLastName.addEventListener("blur", function () {
    if (inputLastName.value === "") {
      lnameError.style.display = "flex";
    } else {
      lnameError.style.display = "none";
    }

    if (moreThan3CharLn(inputLastName.value)) {
      lnameError2.style.display = "flex";
    } else if (lettersOnlyLn(inputLastName.value)) {
      lnameError2.style.display = "flex";
    } else {
      lnameError2.style.display = "none";
    }
  });

  inputLastName.onfocus = function () {
    lnameError.style.display = "none";
    lnameError2.style.display = "none";
  };

  var inputEmail = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  var emailError2 = document.getElementById("email-error-2");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  inputEmail.addEventListener("blur", function () {
    if (inputEmail.value === "") {
      emailError.style.display = "flex";
    } else {
      emailError.style.display = "none";
    }

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

  var inputContactArea = document.getElementById("contact-area");
  var options = [
    "I want to know the memberships and costs",
    "I want to make a query or suggestion",
    "I want to make a claim",
  ];
  var dropdown = document.createElement("select");

  for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.value = options[i];
    option.text = options[i];
    dropdown.appendChild(option);
  }

  inputContactArea.parentNode.replaceChild(dropdown, inputContactArea);

  var inputMessage = document.getElementById("message");
  var messageError = document.getElementById("message-error");
  var messageError2 = document.getElementById("message-error-2");

  function validateMessage() {
    var messageValue = inputMessage.value;
    if (messageValue.length < 3) {
      return true;
    }
  }

  inputMessage.addEventListener("blur", function () {
    if (inputMessage.value === "") {
      messageError.style.display = "flex";
    } else {
      messageError.style.display = "none";
    }

    if (validateMessage(inputMessage.value)) {
      messageError2.style.display = "flex";
    } else {
      messageError2.style.display = "none";
    }
  });

  var buttonSubmit = document.querySelector(".button-submit");

  buttonSubmit.onclick = function (e) {
    e.preventDefault();
    if (
      inputName.value === "" ||
      inputLastName.value === "" ||
      inputEmail.value === "" ||
      option.value === "" ||
      inputMessage.value === ""
    ) {
      alert("Complete the fields");
    } else {
      if (
        !moreThan3Char(inputName.value) &&
        !lettersOnly(inputName.value) &&
        !moreThan3CharLn(inputLastName.value) &&
        !lettersOnlyLn(inputLastName.value) &&
        regex.test(inputEmail.value) &&
        !validateMessage(inputMessage.value)
      ) {
        alert(
          `Name: ${inputName.value} Last Name: ${inputLastName.value} Email: ${inputEmail.value} 
          Contact Reason: ${option.value} Message: ${inputMessage.value}`
        );
      }

      if (moreThan3Char(inputName.value) || lettersOnly(inputName.value)) {
        alert(
          "Name: This field must contain letters only and must be more than 3 letters."
        );
      }
      if (moreThan3CharLn(inputName.value) || lettersOnlyLn(inputName.value)) {
        alert(
          "Last Name: This field must contain letters only and must be more than 3 letters."
        );
      }
      if (!regex.test(inputEmail.value)) {
        alert("Email: Enter a valid email address");
      }
      if (validateMessage(inputMessage.value)) {
        alert(
          "Message: This field must contain Alphanumeric text and must have more than 3 characters."
        );
      }
    }
  };
};
