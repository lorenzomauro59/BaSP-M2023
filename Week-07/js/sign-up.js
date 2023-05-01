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

  inputName.addEventListener("focus", function () {
    nameError.style.display = "none";
    nameError2.style.display = "none";
  });

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

  inputLastName.addEventListener("focus", function () {
    lnameError.style.display = "none";
    lnameError2.style.display = "none";
  });

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

  inputDni.addEventListener("focus", function () {
    dniError.style.display = "none";
    dniError2.style.display = "none";
  });

  var inputDate = document.getElementById("date");
  var dateError = document.getElementById("date-error");

  inputDate.addEventListener("blur", function () {
    if (inputDate.value === "") {
      dateError.style.display = "flex";
    } else {
      dateError.style.display = "none";
    }
  });

  inputDate.addEventListener("focus", function () {
    dateError.style.display = "none";
  });

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

  inputTel.addEventListener("focus", function () {
    telError.style.display = "none";
    telError2.style.display = "none";
  });

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

  inputAddress.addEventListener("focus", function () {
    addressError.style.display = "none";
    addressError2.style.display = "none";
  });

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

  inputCity.addEventListener("focus", function () {
    cityError.style.display = "none";
    cityError2.style.display = "none";
  });

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

  inputPostalCode.addEventListener("focus", function () {
    postalCodeError.style.display = "none";
    postalCodeError2.style.display = "none";
  });

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

  inputEmail.addEventListener("focus", function () {
    emailError.style.display = "none";
    emailError2.style.display = "none";
  });

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

  inputPass.addEventListener("focus", function () {
    passError.style.display = "none";
    passError2.style.display = "none";
  });

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

  inputPassr.addEventListener("focus", function () {
    passrError.style.display = "none";
    passrError2.style.display = "none";
  });

  var buttonRegister = document.querySelector(".button-register");

  const name = localStorage.getItem("name");
  const lastName = localStorage.getItem("last-name");
  const dni = localStorage.getItem("dni");
  const date = localStorage.getItem("date");
  const tel = localStorage.getItem("tel");
  const address = localStorage.getItem("address");
  const city = localStorage.getItem("city");
  const postalCode = localStorage.getItem("postalcode");
  const email = localStorage.getItem("email");
  const pass = localStorage.getItem("pass");
  const passr = localStorage.getItem("pass-r");

  document.getElementById("name").value = name;
  document.getElementById("l-name").value = lastName;
  document.getElementById("dni").value = dni;
  document.getElementById("date").value = date;
  document.getElementById("tel").value = tel;
  document.getElementById("address").value = address;
  document.getElementById("city").value = city;
  document.getElementById("postalcode").value = postalCode;
  document.getElementById("email").value = email;
  document.getElementById("pass").value = pass;
  document.getElementById("pass-r").value = passr;

  var arrayDate = inputDate.value.split("-");
  var formattedDate = arrayDate[1] + "/" + arrayDate[2] + "/" + arrayDate[0];

  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var modalContent = document.querySelector("#myModal .modal-content");
  var pContent = document.querySelector("#myModal .modal-content .p-content");

  buttonRegister.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      inputName.value === "" ||
      inputLastName.value === "" ||
      inputDni.value === "" ||
      inputDate.value === "" ||
      inputTel.value === "" ||
      inputAddress.value === "" ||
      inputCity.value === "" ||
      inputPostalCode.value === "" ||
      inputEmail.value === "" ||
      inputPass.value === "" ||
      inputPassr.value === ""
    ) {
      pContent.textContent = "Complete the fields";
      modal.style.display = "block";
    } else {
      var url =
        "https://api-rest-server.vercel.app/signup?name=" +
        inputName.value.value +
        "&lastName=" +
        inputLastName.value +
        "&dni=" +
        inputDni.value +
        "&dob=" +
        formattedDate +
        "&phone=" +
        inputTel.value +
        "&address=" +
        inputAddress.value +
        "&city=" +
        inputCity.value +
        "&zip=" +
        inputPostalCode.value +
        "&email=" +
        inputEmail.value +
        "&password=" +
        inputPass.value +
        "&passsword=" +
        inputPassr.value;

      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (!data.success) {
            throw new Error(JSON.stringify(data));
          }
          pContent.textContent =
            "SignUp succesful: \n" +
            JSON.stringify(data) +
            "\n" +
            "Name: " +
            inputName.value +
            "\n" +
            "Last Name: " +
            inputLastName.value +
            "\n" +
            "Dni: " +
            inputDni.value +
            "\n" +
            "Date: " +
            inputDate.value +
            "\n" +
            "Tel: " +
            inputTel.value +
            "\n" +
            "Address: " +
            inputAddress.value +
            "\n" +
            "City: " +
            inputCity.value +
            "\n" +
            "Postal Code: " +
            inputPostalCode.value +
            "Email: " +
            inputEmail.value +
            "\n" +
            "Password: " +
            inputPass.value +
            "\n" +
            "Password Repeat: " +
            inputPassr.value;
          modal.style.display = "block";
        })
        .catch(function (error) {
          pContent.textContent = "SignUp unsuccessful \n" + error;
          modal.style.display = "block";
        });

      if (
        !moreThan3Char(inputName.value) &&
        !lettersOnly(inputName.value) &&
        !moreThan3CharLn(inputLastName.value) &&
        !lettersOnlyLn(inputLastName.value) &&
        !validateDni(inputDni.value) &&
        inputDate.value &&
        !validateTel(inputTel.value) &&
        !validateAddress(inputAddress.value) &&
        !validateCity(inputCity.value) &&
        !validatePostalCode(inputPostalCode.value) &&
        regex.test(inputEmail.value) &&
        !validatePass(inputPass.value) &&
        !validatePassr(inputPassr.value)
      ) {
        pContent.textContent = `Name: ${inputName.value} Last Name: ${inputLastName.value} Dni: ${inputDni.value} 
          Birth Date: ${inputDate.value} Telephone: ${inputTel.value} Address: ${inputAddress.value}
          City: ${inputCity.value} Postal Code: ${inputPostalCode.value} Email: ${inputEmail.value} 
          Password: ${inputPass.value} Password Repeat: ${inputPassr.value}`;
        modal.style.display = "block";

        localStorage.setItem("name", inputName.value);
        localStorage.setItem("last-name", inputLastName.value);
        localStorage.setItem("dni", inputDni.value);
        localStorage.setItem("date", inputDate.value);
        localStorage.setItem("tel", inputTel.value);
        localStorage.setItem("address", inputAddress.value);
        localStorage.setItem("city", inputCity.value);
        localStorage.setItem("postalcode", inputPostalCode.value);
        localStorage.setItem("email", inputEmail.value);
        localStorage.setItem("pass", inputPass.value);
        localStorage.setItem("pass-r", inputPassr.value);
      }

      if (moreThan3Char(inputName.value) || lettersOnly(inputName.value)) {
        pContent.textContent =
          "Name: This field must contain letters only and must be more than 3 letters.";
      }
      if (moreThan3CharLn(inputName.value) || lettersOnlyLn(inputName.value)) {
        pContent.textContent =
          "Last Name: This field must contain letters only and must be more than 3 letters.";
      }
      if (validateDni(inputDni.value)) {
        pContent.textContent =
          "Dni: This field must contain numbers only and must have more than 7 numbers.";
      }
      if (validateTel(inputTel.value)) {
        pContent.textContent =
          "Tel: This field must contain numbers only and must have 10 numbers.";
      }
      if (validateAddress(inputAddress.value)) {
        pContent.textContent =
          "Address: This field must contain at least 5 characters with letters, numbers and a space in between.";
      }
      if (validateCity(inputCity.value)) {
        pContent.textContent =
          "City: This field must contain Alphanumeric text and must have more than 3 letters.";
      }
      if (validatePostalCode(inputPostalCode.value)) {
        pContent.textContent =
          "Postal Code: This field must contain numbers only and must have between 4 and 5 numbers.";
      }
      if (!regex.test(inputEmail.value)) {
        pContent.textContent = "Email: Enter a valid email address";
      }
      if (validatePass(inputPass.value)) {
        pContent.textContent =
          "Password: This field must contain letters and numbers, and at least contains 8 characters";
      }
      if (validatePassr(inputPassr.value)) {
        pContent.textContent =
          "Password Repeat: This field must contain letters and numbers, and at least contains 8 characters";
      }
    }
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
