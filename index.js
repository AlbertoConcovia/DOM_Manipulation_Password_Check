// Given the page is rendered with the correct input field When the user changes
// A single character in the input field Then the progress bar should update its value

// Given the page is rendered with a progress bar that has a value range of 0-100
// When the user inputs a password
// Then the progress bar value should be the number of characters multiplied by 5

const getProgressBarValue = (e) => {
  if (e.target.value === undefined) return console.log(`undefined`);
  let inputPasswordLength = e.target.value.length;
  newValue = inputPasswordLength * 5;
  updateProgressBarValue(newValue);
};

const updateProgressBarValue = (newValue) => {
  document.querySelector("#progressBar").value = newValue;
};

let fpassword = document.getElementById("f-password");
fpassword.addEventListener("input", getProgressBarValue);
