function generateCode() {
  var code = "";
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }
  return code;
}

document.getElementById("codes").innerText = generateCode();

var btnvalue = false;
function disableButton(btnvalue) {
  var button = document.getElementById("submit");
  if (btnvalue) button.style.backgroundColor = "grey";
  else button.style.backgroundColor = "#4977d1";

  button.disabled = btnvalue;
}

disableButton();

function evaluateCode() {
  // Reference to the input element
  var inputElement = document.getElementById("randomcode");

  // The string to match against
  var randomCode = document.getElementById("codes").innerText;

  // Add event listener for input event
  inputElement.addEventListener("input", function () {
    // Get the current value of the input field
    var inputValue = inputElement.value;

    // Check if the input value matches the certain string
    var btnvalue = inputValue !== randomCode;

    disableButton(btnvalue);
  });
}

// Call the function to attach the event listener
evaluateCode();
