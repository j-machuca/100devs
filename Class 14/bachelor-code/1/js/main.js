document.querySelector("#finalRose").addEventListener("click", hide);

function resetHandler() {
  document.querySelector("#claire").style.display = "inline";
  document.querySelector("#sharleen").style.display = "inline";
  document.querySelector("#resetButton").remove();
  document.querySelector("#winnerText").remove();
}

function hide() {
  document.querySelector("#claire").style.display = "none";
  document.querySelector("#sharleen").style.display = "none";

  let container = document.querySelector("section");

  let winnerText = document.createElement("h2");
  winnerText.id = "winnerText";
  winnerText.innerText = "The winner was Nikki";
  const resetButton = document.createElement("button");
  resetButton.id = "resetButton";
  resetButton.innerText = "Reset";
  resetButton.addEventListener("click", resetHandler);

  container.insertAdjacentElement("beforeend", winnerText);
  container.insertAdjacentElement("beforeend", resetButton);
}
