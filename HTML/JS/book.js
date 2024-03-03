
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





