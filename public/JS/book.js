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
          console.log("Comments updated:", updatedComments);
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
      const response = await fetch('/api/reviews');
      const responseComment = await fetch('/api/comments');
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