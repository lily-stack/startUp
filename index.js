const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetReviews
apiRouter.get('/reviews', (_req, res) => {
    res.send(reviews);
});

// SubmitReview
apiRouter.post('/review', (req, res) => {
    reviews = updateReviews(req.body, reviews);
    res.send(reviews);
});

// GetComments
apiRouter.get('/comments', (_req, res) => {
    res.send(comments);
});

// SubmitComment
apiRouter.post('/comment', (req, res) => {
    comments = updateComments(req.body, comments);
    res.send(comments);
});