const pin = document.getElementById("pin");
const pinGenerate = document.getElementById("pin-generate");

const pinInput = document.getElementById("pin-input");
const limitNotify = document.getElementById("limit");
const falseNotify = document.getElementById("false");
const trueNotify = document.getElementById("true");
const tryLeft = document.getElementById("try-left");

function generatePin() {
  const randomPin = Math.round(Math.random() * 10000);
  if ((randomPin + "").length === 4) {
    pin.value = randomPin;
    pinInput.value = "";
    tryLeft.innerText = 3;
  } else {
    generatePin();
  }
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  if (isNaN(number)) {
    if (number === "C") {
      pinInput.value = "";
    }
  } else {
    pinInput.value = pinInput.value + number;
    console.log(event.target.innerText);
  }
});

function submit() {
  if (pin.value != "" && pinInput.value != "") {
    if (pin.value === pinInput.value && tryLeft.innerText != 0) {
      console.log("true");
      trueNotify.style.display = "block";
      falseNotify.style.display = "none";
      limitNotify.style.display = "none";
      pin.value = "";
      pinInput.value = "";
    } else {
      if (tryLeft.innerText == 0) {
        falseNotify.style.display = "none";
        trueNotify.style.display = "none";
        limitNotify.style.display = "block";
        generatePin();
      } else {
        console.log("false");
        falseNotify.style.display = "block";
        trueNotify.style.display = "none";
        limitNotify.style.display = "none";
        tryLeft.innerText = Number.parseInt(tryLeft.innerText) - 1;
      }
    }
  }
}
