import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Book Share and Review
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='index.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='book.html'>
                  Book
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='about.html'>
                  About
                </a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main class="container-fluid bg-success text-center">
            <div class="text-light">
                <h1>Welcome</h1>
                <p>Login to find a new adventure</p>
                <div id="loginControls" style="display: none">
                <div class="input-group mb-3">
                    <span class="input-group-text">@</span>
                    <input class="form-control" type="text" id="userName" placeholder="your@email.com" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">🔒</span>
                    <input class="form-control" type="password" id="userPassword" placeholder="password" />
                </div>
                <button type="button" class="btn btn-dark" onclick="loginUser()">Login</button>
                <button type="button" class="btn btn-dark" onclick="createUser()">Create</button>
                </div>

                
                <div id="bookControls" style="display: none">
                <div id="userName"></div>
                <button type="button" class="btn btn-primary" onclick="book()">Start Adventure</button>
                <button type="button" class="btn btn-secondary" onclick="logout()">Logout</button>
                </div>
            </div>

            <div class="modal fade" id="msgModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-dark">
                    <div class="modal-body">error message here</div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        </main>

  
        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Lillian Hill</span>
            <a className='text-reset' href='https://github.com/lily-stack/startUp'>
              Source
            </a>
          </div>
        </footer>
      </div>
    );
  }