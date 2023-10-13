import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="container p-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Your Logo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <form>
          <div className="form-group">
            <label htmlFor="input1">Input 1:</label>
            <input type="text" className="form-control" id="input1" name="input1" />
          </div>
          <div className="form-group">
            <label htmlFor="input2">Input 2:</label>
            <input type="text" className="form-control" id="input2" name="input2" />
          </div>
          <div className="form-group">
            <label htmlFor="input3">Input 3:</label>
            <input type="text" className="form-control" id="input3" name="input3" />
          </div>
          <div className="form-group">
            <label htmlFor="input4">Input 4:</label>
            <input type="text" className="form-control" id="input4" name="input4" />
          </div>
          <div className="form-group">
            <label htmlFor="input5">Input 5:</label>
            <input type="text" className="form-control" id="input5" name="input5" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;