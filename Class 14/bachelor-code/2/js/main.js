const andi = document.querySelector("#andi");
const claire = document.querySelector("#claire");
const sharleen = document.querySelector("#sharleen");

document
  .querySelector("#andiNext")
  .addEventListener("click", selectBachelorette);
document
  .querySelector("#claireNext")
  .addEventListener("click", selectBachelorette);
document
  .querySelector("#sharleenNext")
  .addEventListener("click", selectBachelorette);

function toggleHidden(bachelorette) {
  document.querySelectorAll(`img:not(#${bachelorette})`).forEach((elem) => {
    elem.classList.add("hidden");
  });
  document.querySelector(`#${bachelorette}`).classList.toggle("hidden");
}

function selectBachelorette(e) {
  switch (e.target.id) {
    case "andiNext":
      toggleHidden("andi");
      break;
    case "claireNext":
      toggleHidden("claire");
      break;
    case "sharleenNext":
      toggleHidden("sharleen");
      break;
  }
}
