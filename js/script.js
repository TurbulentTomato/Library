const addBookBtn = document.querySelector(".add-book-btn");
const bookModal = document.querySelector("#add-book-modal")
const library = document.querySelector(".library");
const confirmBtn = document.querySelector(".confirm-btn");
const bookNameEl = document.querySelector("#book-name");
const authorNameEl = document.querySelector("#author-name");
const bookYearEl = document.querySelector("#year");
const coverImgEl = document.querySelector("#cover-img");
const readBookEl = document.querySelector("#read");
let books = [
  {
    name: "One piece",
    author: "Oda",
    year: 1997,
    coverImg: "",
    read: false
  }
];

renderBooks();
//opens modal
addBookBtn.addEventListener("click", () => {
  bookModal.showModal();
})

//closes modal
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (bookNameEl.value !== "") {
    let book = new Book(
      bookNameEl.value,
      authorNameEl.value,
      bookYearEl.value,
      coverImgEl.value,
      readBookEl.checked
    );
    addBookToLibrary(book);
  }
  bookModal.close();
})

function Book(name, author, year, coverImg, read) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.coverImg = coverImg;
  this.read = read;
}

function addBookToLibrary(newBook) {
  books.push(newBook);
  renderBooks();
}

function renderBooks() {
  library.innerHTML = "";
  for (const book of books) {
    library.innerHTML += createBookCard(book);
  }
}

function createBookCard(book) {
  const article = `
    <article>
        <input type="checkbox" value="this.read" id="book-read-checkbox">
        <button type="button" class="del-book-btn">×</button>
        <div class="book">
          <img src="${book.coverImg}" alt="Cover Image" width="200px" height="300px">
          <p>
            <span id="title">Title: ${book.name}</span>
            <span id="author">Author: ${book.author}</span>
            <span id="book-year">Year: ${book.year}</span>
          </p>
        </div>
        <button type="button" id="favourite-btn">Fav</button>
    </article>
`;
  return article;
}
