const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('books');
const userCollection = db.collection('user');
const ratingCollection = db.collection('rating');
const bookCollection = db.collection('book');
const authorCollection = db.collection('author');
const commentCollection = db.collection('comment');
const commentBookCollection = db.collection('commentBook');

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

function addRating(rating) {
  ratingCollection.insertOne(rating);
}

function addbook(book) {
  bookCollection.insertOne(book);
}

function addAuthor(author) {
  authorCollection.insertOne(author);
}

function addComment(comment) {
  commentCollection.insertOne(comment);
}

function addCommentBook(commentBook) {
  commentBookCollection.insertOne(commentBook);
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addRating,
  addbook,
  addAuthor,
  addComment,
  addCommentBook,
};