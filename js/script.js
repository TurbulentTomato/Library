const addBookBtn = document.querySelector(".add-book-btn");
const bookModal = document.querySelector("#add-book-modal")
const library = document.querySelector(".library");
const confirmBtn = document.querySelector(".confirm-btn");
const bookNameEl = document.querySelector("#book-name");
const authorNameEl = document.querySelector("#author-name");
const bookYearEl = document.querySelector("#year");
const coverImgEl = document.querySelector("#cover-img");
const readBookEl = document.querySelector("#read");
const favCheckEl = document.querySelector("#fav-check");
let books = [
  new Book(
    "One Piece",
    "Oda",
    1997,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjM3lEeiGFxNJJ9XByO5hn3deRCMgeXd2ZYMJigS0ycBFbblfRx5yiL8H&s=10",
    true,
    true),
  new Book(
    "Macbeth",
    "Skaespeare",
    1623,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52-5Ge0wxrvHy3WvANTxnsUmR9RoEm9WYbg&usqp=CAU",
    true,
    false
  ),
  new Book(
    "The Time Machine",
    "H G Wells",
    1895,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQKkZwKL1iqvaZFhZYXX09fXTJpaG-LCxZbL3qhHB431uVXtpibQI5sU&s=10",
    true,
    false
  ),
  new Book(
    "Merchant Of Venice",
    "Shakespeare",
    "1600",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJb8WmTy8p57zK1gudELXZdNo3jDLQ9P2-17asBd3ASPnfUdx2Zamn-m6n&s=10",
    true,
    false
  )
];

renderBooks();
/*Checks which element on book card was clicked and proceeds accordingly*/
document.querySelector(".library").addEventListener("click", (event) => {
  let classList = Array.from(event.target.classList);
  let bookIndex = getIndex(event.target);
  if (classList.includes("book-read-checkbox")) {
    toggleReadCheckbox(bookIndex);
  } else if (classList.includes("del-book-btn")) {
    deleteBook(bookIndex);
  } else if (classList.includes("favourite-check")) {
    toggleFav(bookIndex);
  }
})
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
      readBookEl.checked,
      favCheckEl.checked
    );
    addBookToLibrary(book);
    //reset form after book is created 
    bookModal.querySelector("form").reset();
  }
  bookModal.close();
})

function Book(name, author, year, coverImg, read, fav) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.coverImg = coverImg;
  this.read = read;
  this.fav = fav;
}

Book.prototype.toggleRead = function() {
  this.read = !(this.read);
}

Book.prototype.toggleFavourite = function() {
  this.fav = !(this.fav);
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
    <article data-index="${books.indexOf(book)}">
        <input type="checkbox" value="${(book.read)}" 
         class="book-read-checkbox" ${(book.read) ? "checked" : "unchecked"} 
         >
        <button type="button" class="del-book-btn">×</button>
        <div class="book">
          <img src="${book.coverImg}" alt="Cover Image" width="200px" height="300px">
          <p>
            <span class="title">Title: ${book.name}</span>
            <span class="author">Author: ${book.author}</span>
            <span class="book-year">Year: ${book.year}</span>
          </p>
        </div>
        <input type="checkbox" class="favourite-check" ${(book.fav) ? "checked" : "unchecked"}>
    </article>
`;
  return article;
}

function getIndex(element) {
  return Number(element.closest("[data-index]")?.dataset.index);
}
/*Toggles the read property of book*/
function toggleReadCheckbox(bookIndex) {
  books[bookIndex].toggleRead();
  renderBooks();
}

function deleteBook(bookIndex) {
  books.splice(bookIndex, 1);
  renderBooks();
}

function toggleFav(bookIndex) {
  books[bookIndex].toggleFavourite();
  renderBooks();
}

