const getProgressBarValue = (e) => {
  if (e.target.value === undefined) return console.log(`undefined`);
  let inputPasswordLength = e.target.value.length;
  newValue = inputPasswordLength * 5;
  updateProgressBarValue(newValue);
  updateProgressBarColour(inputPasswordLength);
};

const updateProgressBarValue = (newValue) => {
  document.querySelector("#progressBar").value = newValue;
};

const updateProgressBarColour = (inputPasswordLength) => {
  const minValue = 8;
  const maxValue = 12;
  const newFeedback = document.querySelector("p");

  switch (true) {
    case inputPasswordLength < minValue:
      document.querySelector("#progressBar").classList.add("classProgressBarColorRed");
      newFeedback.textContent = `Should be longer`;
      break;
    case inputPasswordLength > minValue && inputPasswordLength < maxValue:
      document.querySelector("#progressBar").classList.add("classProgressBarColorOrange");
      newFeedback.textContent = `Pretty good`;
      break;
    case inputPasswordLength > maxValue:
      console.log(`GREEN - Grrrreat!`);
      document.querySelector("#progressBar").classList.add("classProgressBarColorGreen");
      newFeedback.textContent = `Grrrreat!`;
      break;
  }
};

let password = document.getElementById("password");
password.addEventListener("input", getProgressBarValue);
