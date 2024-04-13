import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Book } from './book/book';
import { About } from './about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <body className="bg-dark text-light">
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <a className="navbar-brand" href="#">Book Share and Review</a>
                <menu className="navbar-nav">
                <li className="nav-item"><NavLink className="nav-link" href="index.html">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" href="book.html">BookFeed</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link active" href="about.html">About</NavLink></li>
                </menu>
            </nav>
        </header>
        <main>App components go here</main>
        <footer className="bg-dark text-white-50">
            <div className="container-fluid">
                <span className="text-reset">Lillian Hill</span>
                <NavLink className="text-reset" href="https://github.com/lily-stack/startUp">Source</NavLink>
            </div>
        </footer>
    </body>
  )
}