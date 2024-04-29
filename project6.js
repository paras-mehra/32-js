// Write a Function to Convert Kms to Miles

function convert() {
    var kms = document.querySelector("#data").value;
    const factor = 0.621371;
    var miles = kms * factor;
    document.getElementById("res").innerText = `${miles} Miles`;
  }
