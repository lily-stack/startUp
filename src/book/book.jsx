import React, { useState, useEffect } from 'react';
import './book.css';

export function Book() {
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);

  React.useEffect(() => {
    fetch('/api/reviews')
      .then((response) => response.json())
      .then((reviews) => {
        setReviews(reviews);
        localStorage.setItem('reviews', JSON.stringify(reviews));
      })
      .catch(() => {
        const reviewsText = localStorage.getItem('reviews');
        if (reviewsText) {
          setReviews(JSON.parse(reviewsText));
        }
      });

      fetch('/api/comments')
      .then((response) => response.json())
      .then((comments) => {
        setReviews(comments);
        localStorage.setItem('comments', JSON.stringify(comments));
      })
      .catch(() => {
        const commentsText = localStorage.getItem('comments');
        if (commentsText) {
          setComments(JSON.parse(commentsText));
        }
      });
  }, []);

  // Mapping over reviews array to create JSX elements for each review row
  const reviewRows = [];
  if (reviews.length) {
    for (const [i,review] of reviews.entries()) {
      reviewRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{review.userName}</td>
          <td>{review.title}</td>
          <td>{review.author}</td>
          <td>{review.rating}</td>
        </tr>
      )
    }
  } else {
    reviewRows.push(
      <tr key='0'>
        <td colSpan='4'>Recommend a book and give it a rating out of 5 stars with 5 being the best rating possible</td>
      </tr>
    );
  }

  const commentRows = [];
  if (comments.length) {
    for (const [i,comment] of comments.entries()) {
      commentRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{comment.userName}</td>
          <td>{comment.title}</td>
          <td>{comment.comment}</td>
        </tr>
      )
    }
  } else {
    commentRows.push(
      <tr key='0'>
        <td colSpan='4'>What would you like to say?</td>
      </tr>
    );
  }


  return (
    <main className="container-fluid text-center">
      <h3 className="notification-header">Notifications</h3>
      <div className="users">
        User:
        <span className="userevents" id="logged-in-user">{''}</span>
        <div id="user-messages"></div>
      </div>

      <h1>Books</h1>
      <table className="table table-warning table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Book</th>
            <th>Author</th>
            <th>Rating</th>
          </tr>
        </thead>
        {/* Render reviewRows inside tbody */}
        <tbody>{reviewRows}</tbody>
      </table>
      <hr />
      <h1>Comments</h1>
      <table className="table table-warning table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Book</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>{commentRows}</tbody>
      </table>
      <hr />
    </main>
  );
}