async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/login') 
      return alert("You have been logged out!");
    } else {
      alert('You are logged out!');
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);
