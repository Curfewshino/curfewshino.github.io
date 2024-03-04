const dropdownButton = document.querySelector("#menu");
const dropdownList = document.querySelector("#nav.hidden");

dropdownButton.addEventListener("click", () => {
  dropdownList.classList.toggle("hidden");
});