const { MongoClient} = require('mongodb'); 

const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('books');
const userCollection = db.collection('user');
const reviewCollection = db.collection('review');
const commentCollection = db.collection('comment');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addReview(userName, title, author, rating) {
  const ratingDoc = {
    userName: userName,
    title: title,
    author: author,
    rating: rating,
  };
  await reviewCollection.insertOne(ratingDoc);
}

async function getReviews() {
  const reviews = await reviewCollection.find({ title: { $ne: null } }).toArray();
  return reviews;
}

async function addComment(userName, ctitle, comment) {
  const commentDoc = {
    userName: userName,
    ctitle: ctitle,
    comment: comment,
    createdAt: new Date()
  };
  await commentCollection.insertOne(commentDoc);
}

async function getComments() {
  const comments = await commentCollection.find({}, { projection: { _id: 1, userName: 1, ctitle: 1, comment: 1, createdAt: 1 } }).toArray();
  return comments;
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addReview,
  addComment,
  getComments,
  getReviews,
};