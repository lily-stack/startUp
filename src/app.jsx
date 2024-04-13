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
    <div className="bg-dark text-light">
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <div className="navbar-brand" href="#">
                    Book Share and Review
                </div>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to=''>
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='book'>
                            BookFeed
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to='about'>
                            About
                        </NavLink>
                    </li>
                </menu>
            </nav>
        </header>
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/book' element={<Book />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <footer className="bg-dark text-white-50">
            <div className="container-fluid">
                <span className="text-reset">Lillian Hill</span>
                <a className="text-reset" href="https://github.com/lily-stack/startUp">Source</a>
            </div>
        </footer>
    </div>
    </BrowserRouter>
  )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}