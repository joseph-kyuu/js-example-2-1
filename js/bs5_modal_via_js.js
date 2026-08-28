const open = document.querySelector(".open-btn");
const close1 = document.querySelector(".close-btn1");
const close2 = document.querySelector(".close-btn2");
const modal = document.querySelector(".modal");

const modalInstance = new bootstrap.Modal(modal);
console.log(modalInstance);

open.addEventListener("click", () => {
  modalInstance.show();
});

close2.addEventListener("click", () => {
  modalInstance.hide();
});
