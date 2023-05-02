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

  inputEmail.addEventListener("focus", function () {
    emailError.style.display = "none";
    emailError2.style.display = "none";
  });

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

  inputPass.addEventListener("focus", function () {
    passError.style.display = "none";
    passError2.style.display = "none";
  });

  var buttonLogin = document.querySelector(".button-login");
  var inputEmail = document.querySelector("#email");
  var inputPass = document.querySelector("#pass");
  var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var modalContent = document.querySelector("#myModal .modal-content");
  var pContent = document.querySelector("#myModal .modal-content .p-content");

  buttonLogin.onclick = function (e) {
    e.preventDefault();

    if (inputEmail.value === "" || inputPass.value === "") {
      pContent.textContent = "Complete the fields";
      modal.style.display = "block";
    } else {
      var url =
        " https://api-rest-server.vercel.app/login?email=" +
        inputEmail.value +
        "&password=" +
        inputPass.value;

      fetch(url)
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          if (!data.success) {
            throw new Error(JSON.stringify(data));
          }
          pContent.textContent =
            "Log in was succesful: \n" +
            JSON.stringify(data) +
            "\n" +
            "Email: " +
            inputEmail.value +
            "\n" +
            "Password: " +
            inputPass.value;
          modal.style.display = "block";
        })
        .catch(function (error) {
          pContent.textContent = "Log in was unsuccessful \n" + error;
          modal.style.display = "block";
        });

      if (regex.test(inputEmail.value) && hasNumbersAndChar(inputPass.value)) {
        pContent.textContent = `Email: ${inputEmail.value} Password: ${inputPass.value}`;
        modal.style.display = "block";
      }
      if (!regex.test(inputEmail.value)) {
        pContent.textContent = "Email: Enter a valid email address";
        modal.style.display = "block";
      }
      if (!hasNumbersAndChar(inputPass.value)) {
        pContent.textContent =
          "Password: Password must contain letters and numbers";
        modal.style.display = "block";
      }
    }
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
