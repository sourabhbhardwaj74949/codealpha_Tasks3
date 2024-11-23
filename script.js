// Sample book data structure
let libraryBooks = [];
let borrowHistory = [];

// Function to add a new book
function addBook() {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const category = document.getElementById("bookCategory").value;

    if (title && author && category) {
        const newBook = {
            title: title,
            author: author,
            category: category,
            borrowed: false,
        };

        libraryBooks.push(newBook);
        displayLibraryBooks();
        clearForm();
    } else {
        alert("Please fill all fields!");
    }
}

// Function to clear the input fields
function clearForm() {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookCategory").value = "";
}

// Function to display all books in the library
function displayLibraryBooks() {
    const libraryList = document.getElementById("libraryList");
    libraryList.innerHTML = ""; // Clear the list

    libraryBooks.forEach((book, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${book.title} by ${book.author} [${book.category}]</span>
            <button onclick="borrowBook(${index})">Borrow</button>
        `;
        libraryList.appendChild(li);
    });
}

// Function to borrow a book
function borrowBook(index) {
    if (!libraryBooks[index].borrowed) {
        libraryBooks[index].borrowed = true;
        borrowHistory.push(libraryBooks[index]);
        displayLibraryBooks();
        displayBorrowHistory();
    } else {
        alert("This book is already borrowed!");
    }
}

// Function to display borrow history
function displayBorrowHistory() {
    const borrowHistoryList = document.getElementById("borrowHistoryList");
    borrowHistoryList.innerHTML = ""; // Clear the history

    borrowHistory.forEach((book) => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author} [${book.category}]`;
        borrowHistoryList.appendChild(li);
    });
}

// Function to search for books by title or author
function searchBooks() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = libraryBooks.filter((book) => 
        book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().includes(searchQuery)
    );
    
    const libraryList = document.getElementById("libraryList");
    libraryList.innerHTML = ""; // Clear the list

    filteredBooks.forEach((book, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${book.title} by ${book.author} [${book.category}]</span>
            <button onclick="borrowBook(${index})">Borrow</button>
        `;
        libraryList.appendChild(li);
    });
}

// Event listeners
document.getElementById("addBookButton").addEventListener("click", addBook);
document.getElementById("searchButton").addEventListener("click", searchBooks);

// Display initial empty state
displayLibraryBooks();
displayBorrowHistory();
