const contestants = document.querySelectorAll(".contestant");

Array.from(contestants).forEach((element) =>
  element.addEventListener("click", checkForRose)
);

function checkForRose(click) {
  if (click.target.classList.contains("rose")) {
    const nikki = document.querySelector("#nikki");
    nikki.classList.toggle("hidden");
    click.target.style.color = "green";

    setTimeout(() => {
      click.target.style.color = "black";
    }, 2000);
  } else {
    click.target.style.color = "red";
    alert("Wrong!");
    setTimeout(() => {
      click.target.style.color = "black";
    }, 2000);
  }
}
