const addBookBtn = document.querySelector(".add-book-btn");
const bookModal = document.querySelector("#add-book-modal")
const library = document.querySelector(".library");
const confirmBtn = document.querySelector(".confirm-btn");
const bookNameEl = document.querySelector("#book-name");
const authorNameEl = document.querySelector("#author-name");
const bookYearEl = document.querySelector("#year");
const coverImgEl = document.querySelector("#cover-img");

//opens modal
addBookBtn.addEventListener("click", () => {
  bookModal.showModal();
})

//closes modal
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (bookNameEl.value === "") {
    bookModal.close();
  }
  let book = new Book(bookNameEl.value, authorNameEl.value, bookYearEl.value, coverImgEl.value)
})

function Book(name, author, year, coverImg) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.coverImg = coverImg;
}
