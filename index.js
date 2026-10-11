let books;

async function renderBooks() {
  const booksWrapper = document.querySelector('.books');
  
booksWrapper.classList += ' books__loading'

if (!books) {
const books = await getBooks();
}

booksWrapper.classList.remove('books__loading')

  if (filter === 'LOW_TO_HIGH') {
    books.sort((a, b) => (a.salePrice || a.originalprice) - (b.salePrice || b.originalprice));
   }
  else if (filter === 'HIGH_TO_LOW') {
    books.sort((a, b) => (b.salePrice || b.originalprice) - (a.salePrice || a.originalprice));
  }
  else if (filter === 'RATING') {
    books.sort((a, b) => (b.rating) - (a.rating));
  }


const booksHTML = books
  .map((book) => {
    return `<div class="books">
  <figure class="book__img--wrapper"> 
     <img class="book__img" src="${book.url}" alt="">
   </figure> 
  <div class="book__title">
    ${book[0].title}
  </div>
  <div class="book__ratings">
    ${ratingHTML(book.rating)}
    </div>
  <div class="book__price">
    ${priceHTML(book.originalPrice, book.salePrice)}
       </div>
    <span>$${book[0].originalPrice.toFixed(2)}</span> 
    $14.95
  </div>
</div>`;
  })
  .join(""); 

console.log(booksHTML);
 
 booksWrapper.innerHTML = booksHTML;
}

function priceHTML(originalPrice, salePrice) {
  if (!salePrice) {
    return '$${originalPrice.toFixed(2)}'
  }
    return '<span class="book__price--normal">$$(originalPrice.toFixed(2))</span>$${salePrice.toFixed(2)'; {
    }
  }

function ratingsHTML(rating) {
  let ratingHTML = "";
  for (let i = 0; i < Math.floor(4.1); ++i) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>/n'
  }
if (!Number.isInteger(rating)) {
  ratingHTML += '<i class="fas fa-star-half-alt"></i>/n';
}
return ratingHTML
}

 function filterBooks(event) {
    renderBooks(event.target.value)
  }
 


setTimeout(() => {
  renderBooks();
});
// Fake Data
  function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
    {
      id: 1,
      title: "Crack the Coding Interview",
      url: "assets/images/crack-the-coding-interview.jpg",
      price: 59.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/images/atomic-habits.jpg",
      price: 39.95,
      salePrice: null,
      rating: 5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets/images/deep-work.jpg",
      price: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "assets/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Be Obsessed or Be Average",
      url: "assets/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4.5,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "assets/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "assets/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 9,
      title: "The 5 second Rule",
      url: "assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 10,
      title: "your next five moves",
      url: "assets/book-7.jpeg",
      originalPrice: 40,
      salePrice: null,
      rating: 4,
    }
    ]);
  }, 1000);
});
  }







function openMenu () {
  document.body.classList += " menu--open"
}

function closeMenu () {
  document.body.classList.remove('menu--open')
}