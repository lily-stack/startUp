
function postBook() {
    console.log("postBook() function called");
    var author = document.getElementById("author").value;
    var title = document.getElementById("title").value;
    var rating = document.getElementById("rating").value;
    addReview(author,  title,  rating);
}

function addReview(author, title, rating) {
    console.log("Adding review...");
    const userName = this.getUserName();
    let reviews = [];
    const reviewsText = localStorage.getItem('reviews');
    console.log("Loaded reviews from localStorage:", reviewsText);
    if (reviewsText) {
      reviews = JSON.parse(reviewsText);
    }
    console.log("Current reviews array:", reviews);
    reviews = this.updateReviews(userName, author, title, rating, reviews);
    console.log("Updated reviews array:", reviews);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    loadReviews();
}

function getUserName() {
    return localStorage.getItem('userName') ?? 'anonymous reviewer';
}

function updateReviews(userName, author, title, rating, reviews) {
    const newReview = { userName: userName, author: author, title: title, rating: rating };

    reviews.push(newReview);

    if (reviews.length > 10) {
      reviews.length = 10;
    }

    return reviews;
}

function loadReviews() {
    console.log("Loading reviews...");
    let reviews = [];
    const reviewsText = localStorage.getItem('reviews');
    console.log("Loaded reviews from localStorage:", reviewsText);
    if (reviewsText) {
      reviews = JSON.parse(reviewsText);
    }
    console.log("Current reviews array:", reviews);
    const tableBodyEl = document.querySelector('#reviews');

    if (reviews.length) {
      for (const review of reviews) {
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











  function postComment() {
    var ctitle = document.getElementById("ctitle").value;
    var comment = document.getElementById("comment").value;
    addComment(ctitle, comment);
}

function addComment(ctitle, comment) {
    const userName = this.getUserName();
    let comments = [];
    const commentsText = localStorage.getItem('comments');
    if (commentsText) {
      comments = JSON.parse(commentsText);
    }
    comments = this.updateComments(userName, ctitle, comment, comments);
    localStorage.setItem('comments', JSON.stringify(comments));
    loadComments();
}

function updateComments(userName, ctitle, comment, comments) {
    const newComment = { userName: userName, ctitle: ctitle, comment: comment };

    comments.push(newComment);

    if (comments.length > 10) {
      comments.length = 10;
    }

    return comments;
}

function loadComments() {
    let comments = [];
    const commentsText = localStorage.getItem('comments');
    if (commentsText) {
      comments = JSON.parse(commentsText);
    }
    const tableBodyEl = document.querySelector('#comments');

    if (comments.length) {
      for (const comment of comments) {
        const userTdEl = document.createElement('td');
        const ctitleTdEl = document.createElement('td');
        const commentTdEl = document.createElement('td');
  
        userTdEl.textContent = comment.userName;
        ctitleTdEl.textContent = comment.ctitle;
        commentTdEl.textContent = comment.comment;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(userTdEl);
        rowEl.appendChild(ctitleTdEl);
        rowEl.appendChild(commentTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Leave a Comment</td></tr>';
    }
  }

window.addEventListener('load', function() {
    loadComments();
    loadReviews();
});
