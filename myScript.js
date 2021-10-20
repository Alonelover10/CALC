const themeSwitch = document.querySelector("input");
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle('dark-mode');
});

const input = document.querySelector("#output");
const equal = document.querySelector("#equal");
const inputChar = document.querySelector("#inputChars");
const clear = document.querySelector("#C");

inputChars.addEventListener('click', (e) => {
  let target = e.target.id;
  if(target ==="C") {
    input.textContent = "";
  } else if(target ==="equal")
    {
      target = " ";
      input.textContent+= target;
    }
  else {
  input.textContent+= target;
  }
  equal.addEventListener('click', () =>{
    let result = eval(input.textContent);
    input.textContent = result;
});

});

clear.addEventListener('click', () => {
  input.textContent = " ";
});

