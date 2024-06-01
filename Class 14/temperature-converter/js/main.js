//Write your pseduo code first!

// hold variable for celsius

document.addEventListener("keyup", calculateTemperature);

function calculateTemperature(e) {
  try {
    let celsius = parseInt(e.target.value);
    let farenheit = 0;

    // convert from celsius to farenheit
    farenheit = celsius * 1.8 + 32;

    if (isNaN(farenheit)) {
      document.querySelector("#temp").innerText = "";
    } else {
      document.querySelector("#temp").innerText = farenheit;
    }
  } catch {
    document.querySelector("#temp").innerText = "Something went wrong...";
  }
}
