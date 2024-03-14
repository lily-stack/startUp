const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

let reviews = [];
let comments = [];
// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetReviews
apiRouter.get('/review', (_req, res) => {
    res.send(reviews);
});

// SubmitReview
apiRouter.post('/review', (req, res) => {
    //reviews = updateReviews(req.body, reviews);
    const newReview = req.body;
    reviews.push(newReview);
    res.send(reviews);
});

// GetComments
apiRouter.get('/comment', (_req, res) => {
    res.send(comments);
});

// SubmitComment
apiRouter.post('/comment', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.send(comments);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.

/*function updateReviews(newReview, reviews) {
    reviews.push(newReview);

  return reviews;
}*/

/*function updateComments(newComment, comments) {
    comments.push(newComment);

  return comments;
}*/