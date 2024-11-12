const addBookBtn = document.querySelector(".add-book-btn");
const bookModal = document.querySelector("#add-book-modal")
const library = document.querySelector(".library");
const confirmBtn = document.querySelector(".confirm-btn");
const bookNameEl = document.querySelector("#book-name");
const authorNameEl = document.querySelector("#author-name");
const bookYearEl = document.querySelector("#year");
const coverImgEl = document.querySelector("#cover-img")

addBookBtn.addEventListener("click", () => {
  bookModal.showModal();
})

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  bookModal.close()
})
