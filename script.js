const hInput = document.querySelector("#hInput");
const wInput = document.querySelector("#wInput");
const calBtn = document.querySelector(".calculate");
const result = document.querySelector(".result");
const container = document.querySelector(".container");

calBtn.addEventListener("click", () => {
  const hVal = parseFloat(hInput.value);
  const wVal = parseFloat(wInput.value);

  hInput.value = "";
  wInput.value = "";

  result.innerHTML = `Your BMI : <span>${calculate(
    (wVal * 10000) / (hVal * hVal)
  )} kg/m<sup>2</sup></span>`;
  container.appendChild(result);
});

function calculate(bmi) {
  return bmi.toFixed(2);
}
