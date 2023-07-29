const gradientBox = document.getElementById('box');
const selectMenu = document.querySelector('.select-box select');
const inputs = document.querySelectorAll('.inputs input');
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");


const randomgradient = () => {
  const randomhex = Math.floor(Math.random() * 0xffffff).toString(16)
  return `#${randomhex}`
};

const gradientclr = (israndom) => {
  if(israndom){
    inputs[0].value = randomgradient();
    inputs[1].value = randomgradient();

  };
  const gradient = `linear-gradient(${selectMenu.value}, ${inputs[0].value}, ${inputs[1].value})`;
  gradientBox.style.background = gradient
  textarea.value = gradient
};

const copycode = () => {
  navigator.clipboard.writeText(textarea.value)
  copyBtn.textContent = "code copied";
  copyBtn.style.background = "#8775c7"
  setTimeout( () => {
  copyBtn.textContent = "copy code"
  copyBtn.style.background = "#8a6cff"
  },3000)
}

inputs.forEach((input) => {
  input.addEventListener('input', () => {gradientclr(false)});
});

selectMenu.addEventListener("change", () => {gradientclr(false)})

refreshBtn.addEventListener("click",() => gradientclr(true))
copyBtn.addEventListener("click",copycode)
