(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    document.querySelector('#userName').textContent = userName;
    setDisplay('loginControls', 'none');
    setDisplay('bookControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('bookControls', 'none');
  }
})();
  
  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }
  
  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('userName', userName);
      window.location.href = 'book.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }
  
  function book() {
    window.location.href = 'book.html';
  }
  
  function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }
  
  async function getUser(email) {
    let scores = [];
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }
  
  function setDisplay(controlId, display) {
    const bookControlEl = document.querySelector(`#${controlId}`);
    if (bookControlEl) {
      bookControlEl.style.display = display;
    }
  }
  