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

function disableButton() {
  document.getElementById("submit").disabled = true;
}

disableButton();
