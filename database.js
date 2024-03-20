const { MongoClient, ObjectId } = require('mongodb');
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

function addReview(userId, bookId, authorId, rating) {
  ratingCollection.insertOne(rating);
}

async function addbook(book) {
  const ratingDoc = {
    userId: ObjectId(userId),
    bookId: ObjectId(bookId),
    rating: rating,
    createdAt: new Date()
  };
  await reviewCollection.insertOne(ratingDoc);
}

async function addComment(userId, bookId, comment) {
  const commentDoc = {
    userId: ObjectId(userId),
    bookId: ObjectId(bookId),
    comment: comment,
    createdAt: new Date()
  };
  await commentCollection.insertOne(commentDoc);
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addReview,
  addComment,
};