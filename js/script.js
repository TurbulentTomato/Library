const addBookBtn = document.querySelector(".add-book-btn");
const bookModal = document.querySelector("#add-book-modal")
const library = document.querySelector(".library");
const confirmBtn = document.querySelector(".confirm-btn");
const bookNameEl = document.querySelector("#book-name");
const authorNameEl = document.querySelector("#author-name");
const bookYearEl = document.querySelector("#year");
const coverImgEl = document.querySelector("#cover-img");
const readBookEl = document.querySelector("#read");

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
  let book = new Book(
    bookNameEl.value,
    authorNameEl.value,
    bookYearEl.value,
    coverImgEl.value,
    readBookEl.checked
  );
  createBookCard(book);
})

function Book(name, author, year, coverImg, read) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.coverImg = coverImg;
  this.read = read;
}

function createBookCard(book) {
  const article = document.createElement("article");
  article.innerHTML = `
        <input type="checkbox" value="this.read" id="book-read-checkbox">
        <button type="button" class="del-book-btn">×</button>
        <div class="book">
          <img src="${book.coverImg}" alt="Cover Image">
          <p>
            <span id="title">Title: ${book.name}</span>
            <span id="author">Author: ${book.author}</span>
            <span id="year">Year: ${book.year}</span>
          </p>
        </div>
        <button type="button" id="favourite-btn">Fav</button>
`;
  return article;
}
