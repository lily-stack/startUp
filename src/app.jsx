import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Book } from './book/book';
import { About } from './about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">Book Share and Review</div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to=''>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='book'>
                  BookFeed
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <div className="content">
          <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/book' element={<Book />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>

        <footer className="container-fluid bg-dark text-white-50 footer">
            <span>Lillian Hill</span>
            <a href="https://github.com/lily-stack/startUp">Source</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
}