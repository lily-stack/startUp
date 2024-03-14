async function postBook() {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const rating = document.getElementById("rating").value;
  const userName = localStorage.getItem('userName');

  try {
      const response = await fetch('/api/review', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userName, author, title, rating })
      });

      if (response.ok) {
          const updatedReviews = await response.json();
          console.log("Reviews updated:", updatedReviews);
          loadReviews(updatedReviews);
      } else {
          console.error('Failed to post review:', response.statusText);
      }
  } catch (error) {
      console.error('Error posting review:', error);
  }
}

function loadReviews(reviews) {
  const tableBodyEl = document.querySelector('#reviews');
  tableBodyEl.innerHTML = '';

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
      tableBodyEl.innerHTML = '<tr><td colspan="4">Be the first to recommend a book</td></tr>';
  }
}




async function postComment() {
  const ctitle = document.getElementById("ctitle").value;
  const commentText = document.getElementById("comment").value;
  const userName = localStorage.getItem('userName');

  try {
      const response = await fetch('/api/comment', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userName, ctitle, comment: commentText })
      });

      if (response.ok) {
          const updatedComments = await response.json();
          console.log("Commentss updated:", updatedComments);
          loadComments(updatedComments);
      } else {
          console.error('Failed to post comment:', response.statusText);
      }
  } catch (error) {
      console.error('Error posting comment:', error);
  }
}

function loadComments(comments) {
  const tableBodyEl = document.querySelector('#comments');
  tableBodyEl.innerHTML = '';

  if (comments.length) {
      for (const comment of comments) {
          const userTdEl = document.createElement('td');
          const titleTdEl = document.createElement('td');
          const commentTdEl = document.createElement('td');

          userTdEl.textContent = comment.userName;
          titleTdEl.textContent = comment.ctitle;
          commentTdEl.textContent = comment.comment;

          const rowEl = document.createElement('tr');
          rowEl.appendChild(userTdEl);
          rowEl.appendChild(titleTdEl);
          rowEl.appendChild(commentTdEl);

          tableBodyEl.appendChild(rowEl);
      }
  } else {
      tableBodyEl.innerHTML = '<tr><td colspan="4">Be the first to recommend a book</td></tr>';
  }
}


// Function to load reviews  and comments when the page is first accessed
async function initialize() {
  try {
      const response = await fetch('/api/review');
      const responseComment = await fetch('/api/comment');
      if (response.ok && responseComment.ok) {
          const initialReviews = await response.json();
          const initialComments = await responseComment.json();
          console.log("Initial reviews loaded:", initialReviews);
          loadReviews(initialReviews);
          loadComments(initialComments);
      } else {
          console.error('Failed to load initial reviews:', response.statusText);
      }
      const userName = localStorage.getItem('userName');
      document.getElementById('logged-in-user').textContent = userName;
  } catch (error) {
      console.error('Error loading initial reviews:', error);
  }
}

// Call the initialize function when the page loads
window.addEventListener('load', initialize);

/*async function postBook() {
  console.log("postBook() function called");
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const rating = document.getElementById("rating").value;

  try {
      const response = await fetch('/api/review', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ author, title, rating })
      });

      if (response.ok) {
          //const updatedReviews = await response.json();
          console.log("Reviews updated:", updatedReviews);
          loadReviews();
      } else {
          console.error('Failed to post review:', response.statusText);
      }
  } catch (error) {
      console.error('Error posting review:', error);
  }
}

function addReview(author, title, rating) {
  console.log("Adding review...");
  const userName = this.getUserName();
  console.log("book review username: " + userName)
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
  const reviewsText = localStorage.getItem('reviews');
  console.log("Loaded reviews from localStorage:", reviewsText);
  if (reviewsText) {
    reviews = JSON.parse(reviewsText);
  }
  console.log("Current reviews array:", reviews);
  const tableBodyEl = document.querySelector('#reviews');
  tableBodyEl.innerHTML = '';
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
}*/





/*async function postComment() {
  var ctitle = document.getElementById("ctitle").value;
  var comment = document.getElementById("comment").value;

  try {
      const response = await fetch('/api/comment', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ctitle, comment })
      });

      if (response.ok) {
          const comments = await response.json();
          console.log("Comments updated:", comments);
          loadComments();
      } else {
          console.error('Failed to post comment:', response.statusText);
      }
  } catch (error) {
      console.error('Error posting comment:', error);
  }
}
*/
/*function addComment(ctitle, comment) {
  const userName = this.getUserName();
  console.log("comment username: " + userName)
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
  const commentsText = localStorage.getItem('comments');
  if (commentsText) {
    comments = JSON.parse(commentsText);
  }
  const tableBodyEl = document.querySelector('#comments');
  tableBodyEl.innerHTML = '';
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
}*/
// Simulate chat messages that will come over WebSocket
setInterval(() => {
  const chatText = document.querySelector('#user-messages');
  chatText.innerHTML =
    `<div class="event"><span class="user-event">Bob</span> commented on your recommendation</div>` +
    chatText.innerHTML;
}, 9000);

function loadNotifications() {
  // Retrieve username from local storage
  const userName = localStorage.getItem('userName');

  // Update notification messages with the username
  const userMessages = document.querySelectorAll('.userevents');
  userMessages.forEach(user => {
      user.textContent = userName;
  });
}
window.addEventListener('load', loadNotifications);