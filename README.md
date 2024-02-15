# Book Review
CS260 startup
[My Notes](notes.md)

## Specification Deliverable

### Elevator Pitch

Do you like reading? Have you ever struggled to know what to read next after finishing a good book? The Book Review application allows you to join with your friends online and see books they have read reccently and what their thoughts are. It is an easy to use platform to connect book lovers no matter how busy you are. Find out which books are hot and which are not so you can add to your reading fun!

### Design

<img src=IMG_1853.jpg width="500" height="300">

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

    posting cover photos of a book
    
- **DB/Login** - Store users, posts, and comments in database. Register and login users. Credentials securely stored in database. Can't post or comment unless authenticated.
- **WebSocket** -  When a user posts a new book, all users are notified. When a user comments on a book post, the user who posted the book will be notified of the comment.
- **React** - Application ported to use the React web framework.

## HTML Delivarable

For this deliverable I built out the structure of my application using HTML.

- **HTML Pages** - 3 HTML pages that represent the ability to login, comment and suggest a book, and an about page.

- **Links** - Each HTML page contains links to navigate to the Home/log in page, the comment and suggest page, and the about page.

- **Text** - The option to suggest a book and rate it and to comment are represented by a textual description.

- **3rd Party Service Call** - A 3rd party service from PenguinHouse will be used to publish certain book covers.

- **Images** - I included an image of books in the about HTML page.

- **Login** - Input box and submit button for login. 

- **Database** - Books recommended and who recommended them as well as comments and who leaves what comments will be data pulled from the database.

- **WebSocket** - A notification will be sent in real time when someone suggests a new book and when someone makes a new comment.

## CSS Delivarable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body** - I standardized the header and footer size so they are the same on every web page. The Headers have the links to related webpages to the right of website name. Footers have my name as the author on bottom left and a link to my github labled "source" on bottom left.

- **Navigation elements** - I dropped the underlines separating navigation elements from other parts of the webpage. I also changed the color for anchor elements.

- **Responsive to window resizing** - My app looks great on all window sizes and devices.

- **Application elements** - Used iattractive colors and used contrasting colors to make key words more noticeable and provided sufficient whitespace to make text and content easy to read.

- **Application text content** - Used consistent fonts and italicized a quote to differentiate it from other text.

- **Application images** - Image in about page flexes with change in size of window.