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

  var inputDni = document.getElementById("dni");
  var dniError = document.getElementById("dni-error");
  var dniError2 = document.getElementById("dni-error-2");

  function validateDni() {
    var dniValue = inputDni.value.trim();
    if (dniValue.length < 7) {
      return true;
    } else if (isNaN(dniValue)) {
      return true;
    } else {
      return false;
    }
  }

  inputDni.addEventListener("blur", function () {
    if (inputDni.value === "") {
      dniError.style.display = "flex";
    } else {
      dniError.style.display = "none";
    }

    if (validateDni(inputDni.value)) {
      dniError2.style.display = "flex";
    } else {
      dniError2.style.display = "none";
    }
  });

  inputDni.onfocus = function () {
    dniError.style.display = "none";
    dniError2.style.display = "none";
  };

  var inputDate = document.getElementById("date");
  var dateError = document.getElementById("date-error");

  inputDate.addEventListener("blur", function () {
    if (inputDate.value === "") {
      dateError.style.display = "flex";
    } else {
      dateError.style.display = "none";
    }
  });

  inputDate.onfocus = function () {
    dateError.style.display = "none";
  };

  var inputTel = document.getElementById("tel");
  var telError = document.getElementById("tel-error");
  var telError2 = document.getElementById("tel-error-2");

  function validateTel() {
    var telValue = inputTel.value.trim();
    if (telValue.length !== 10) {
      return true;
    } else if (isNaN(telValue)) {
      return true;
    }
  }

  inputTel.addEventListener("blur", function () {
    if (inputTel.value === "") {
      telError.style.display = "flex";
    } else {
      telError.style.display = "none";
    }

    if (validateTel(inputTel.value)) {
      telError2.style.display = "flex";
    } else {
      telError2.style.display = "none";
    }
  });

  inputTel.onfocus = function () {
    telError.style.display = "none";
    telError2.style.display = "none";
  };

  var inputAddress = document.getElementById("address");
  var addressError = document.getElementById("address-error");
  var addressError2 = document.getElementById("address-error-2");

  function validateAddress() {
    var addressValue = inputAddress.value.trim();
    if (addressValue.length < 5) {
      return true;
    }
    var hasLetter = false;
    var hasNumber = false;
    var hasSpace = false;
    for (var i = 0; i < addressValue.length; i++) {
      var char = addressValue.charAt(i);
      if (isNaN(char)) {
        hasLetter = true;
      } else {
        hasNumber = true;
      }
      if (char === " ") {
        hasSpace = true;
      }
    }
    if (!(hasLetter && hasNumber && hasSpace)) {
      return true;
    }
  }

  inputAddress.addEventListener("blur", function () {
    if (inputAddress.value === "") {
      addressError.style.display = "flex";
    } else {
      addressError.style.display = "none";
    }

    if (validateAddress(inputAddress.value)) {
      addressError2.style.display = "flex";
    } else {
      addressError2.style.display = "none";
    }
  });

  inputAddress.onfocus = function () {
    addressError.style.display = "none";
    addressError2.style.display = "none";
  };

  var inputCity = document.getElementById("city");
  var cityError = document.getElementById("city-error");
  var cityError2 = document.getElementById("city-error-2");

  function validateCity() {
    var cityValue = inputCity.value;
    if (cityValue.length < 3) {
      return true;
    } else {
      for (var i = 0; i < cityValue.length; i++) {
        var charCode = cityValue.charCodeAt(i);
        if (
          !(charCode >= 48 && charCode <= 57) &&
          !(charCode >= 65 && charCode <= 90) &&
          !(charCode >= 97 && charCode <= 122)
        ) {
          return true;
        }
      }
    }
  }

  inputCity.addEventListener("blur", function () {
    if (inputCity.value === "") {
      cityError.style.display = "flex";
    } else {
      cityError.style.display = "none";
    }

    if (validateCity(inputCity.value)) {
      cityError2.style.display = "flex";
    } else {
      cityError2.style.display = "none";
    }
  });

  inputCity.onfocus = function () {
    cityError.style.display = "none";
    cityError2.style.display = "none";
  };

  var inputPostalCode = document.getElementById("postalcode");
  var postalCodeError = document.getElementById("postalcode-error");
  var postalCodeError2 = document.getElementById("postalcode-error-2");

  function validatePostalCode() {
    var value = inputPostalCode.value.trim();
    if (!/^\d+$/.test(value)) {
      return true;
    } else if (value.length < 4 || value.length > 5) {
      return true;
    } else {
      return false;
    }
  }

  inputPostalCode.addEventListener("blur", function () {
    if (inputPostalCode.value === "") {
      postalCodeError.style.display = "flex";
    } else {
      postalCodeError.style.display = "none";
    }

    if (validatePostalCode(inputPostalCode.value)) {
      postalCodeError2.style.display = "flex";
    } else {
      postalCodeError2.style.display = "none";
    }
  });

  inputPostalCode.onfocus = function () {
    postalCodeError.style.display = "none";
    postalCodeError2.style.display = "none";
  };

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

  var inputPass = document.getElementById("pass");
  var passError = document.getElementById("pass-error");
  var passError2 = document.getElementById("pass-error-2");

  function validatePass() {
    var passValue = inputPass.value;
    var hasLetter = false;
    var hasNumber = false;

    if (passValue.length < 8) {
      passError2.style.display = "flex";
      return true;
    }

    for (var i = 0; i < passValue.length; i++) {
      if (/[a-zA-Z]/.test(passValue[i])) {
        hasLetter = true;
      } else if (/[0-9]/.test(passValue[i])) {
        hasNumber = true;
      }
    }

    if (!hasLetter || !hasNumber) {
      return true;
    } else {
      return false;
    }
  }

  inputPass.addEventListener("blur", function () {
    if (inputPass.value === "") {
      passError.style.display = "flex";
    } else {
      passError.style.display = "none";
    }

    if (validatePass(inputPass.value)) {
      passError2.style.display = "flex";
    } else {
      passError2.style.display = "none";
    }
  });

  inputPass.onfocus = function () {
    passError.style.display = "none";
    passError2.style.display = "none";
  };

  var inputPassr = document.getElementById("pass-r");
  var passrError = document.getElementById("pass-r-error");
  var passrError2 = document.getElementById("pass-r-error-2");

  function validatePassr() {
    var passrValue = inputPassr.value;
    var hasLetter = false;
    var hasNumber = false;

    if (passrValue.length < 8) {
      passrError2.style.display = "flex";
      return true;
    }

    for (var i = 0; i < passrValue.length; i++) {
      if (/[a-zA-Z]/.test(passrValue[i])) {
        hasLetter = true;
      } else if (/[0-9]/.test(passrValue[i])) {
        hasNumber = true;
      }
    }

    if (!hasLetter || !hasNumber) {
      return true;
    } else {
      return false;
    }
  }

  inputPassr.addEventListener("blur", function () {
    if (inputPassr.value === "") {
      passrError.style.display = "flex";
    } else {
      passrError.style.display = "none";
    }

    if (validatePassr(inputPassr.value)) {
      passrError2.style.display = "flex";
    } else {
      passrError2.style.display = "none";
    }
  });

  inputPassr.onfocus = function () {
    passrError.style.display = "none";
    passrError2.style.display = "none";
  };
};
