const openButton = document.querySelector("#openModal");
const closeButton = document.querySelector("#closeModal");
const modal = document.querySelector("#exampleModal");

openButton.addEventListener("click", () => {
  modal.classList.add("show");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("show");
});
