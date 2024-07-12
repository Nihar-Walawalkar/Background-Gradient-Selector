let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let outputColor = document.getElementById("output-color");
let outputCode = document.getElementById("output-code");

let hexString = "0123456789abcdef";

let randomColor = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
};

let generateGradient = () => {
  let colorOne = randomColor();
  let colorTwo = randomColor();
  let angle = Math.floor(Math.random() * 360);
  console.log(colorOne, colorTwo, angle);
  outputColor.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
  outputCode.value = `Background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
};

generateBtn.addEventListener("click", generateGradient);

copyBtn.addEventListener("click", () => {
  outputCode.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
});

window.onload = generateGradient();
