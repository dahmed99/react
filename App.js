import React from 'react';
import './App.css';

function App() {
  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      input1: formData.get('input1'),
      // Repeat for input2-5
    };

    fetch('https://test.com/test', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle the response as needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="logo">Your Logo</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="input1">Input 1:</label>
            <input type="text" id="input1" name="input1" />
          </div>

          {/* Repeat this for inputs 2-5 */}
          
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;