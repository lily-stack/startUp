# Book Review
CS260 startup
[My Notes](notes.md)

## Specification Deliverable

### Elevator Pitch

Do you like reading? Have you ever struggled to know what to read next after finishing a good book? The Book Review application allows you to join with your friends online and see books they have read reccently and what their thoughts are. It is an easy to use platform to connect book lovers no matter how busy you are. Find out which books are hot and which are not so you can add to your reading fun!

### Design

<img src=IMG_1853.jpg width="400" height="300">

Here is a sequence diagram that shows how people would interact with the backend to post and comment.

<img src=IMG_1854.jpg width="300" height="300">


### Key Features

- Secure login over HTTPS
- Ability to post a new book review
- Ability to comment on other book reviews
- Alerted when others comment on your book review

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login and one for posting and commenting on books.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, posting display, commenting display, backend endpoint calls.
- **Service** - Backend service with endpoints for:

    login

    retrieving posts

    submitting posts

    retrieving comments

    submitting comments
    
- **DB/Login** - Store users, posts, and comments in database. Register and login users. Credentials securely stored in database. Can't post or comment unless authenticated.
- **WebSocket** -  When a user posts a new book, all users are notified. When a user comments on a book post, the user who posted the book will be notified of the comment.
- **React** - Application ported to use the React web framework.
