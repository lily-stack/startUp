
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
//update
function updateReviews(userName, author, title, rating, reviews) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    return scores;
}



