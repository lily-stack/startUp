
function postBook() {
    var author = document.getElementById("author");
    var title = document.getElementById("title");
    var rating = document.getElementById("rating");
    addReview(author,  title,  rating);
}

function addReview(author, title, rating) {
    const userName = this.getUserName();
    let reviews = [];
    const reviewsText = localStorage.getItem('reviews');
    if (reviewsText) {
      reviews = JSON.parse(reviewsText);
    }
    reviews = this.updateReviews(userName, author, title, rating, reviews);

    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function getUserName() {
    return localStorage.getItem('userName') ?? 'anonymous reviewer';
}

function updateReviews(userName, author, title, rating, reviews) {
    const newReview = { name: userName, author: author, title: title, rating: rating };

    reviews.push(newReview);

    if (reviews.length > 10) {
      reviews.length = 10;
    }

    return reviews;
}

function loadReviews() {
    let reviews = [];
    const reviewsText = localStorage.getItem('reviews');
    if (reviewsText) {
      reviews = JSON.parse(reviewsText);
    }
  
    const tableBodyEl = document.querySelector('#reviews');
  
    if (reviews.length) {
      for (const [i, review] of reviews.entries()) {
        const userTdEl = document.createElement('td');
        const titleTdEl = document.createElement('td');
        const authorTdEl = document.createElement('td');
        const ratingTdEl = document.createElement('td');
  
        userTdEl.textContent = review.userName;
        titleTdEl.textContent = review.title;
        authorTdEl.textContent = review.author;
        ratingTdEl.textContent = review.rating;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(userTdEl);
        rowEl.appendChild(titleTdEl);
        rowEl.appendChild(authorTdEl);
        rowEl.appendChild(ratingTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to recommend a book</td></tr>';
    }
  }



