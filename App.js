import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <form>
        <div className="form-group">
          <label htmlFor="input1">Input 1:</label>
          <input type="text" className="form-control" id="input1" name="input1" />
        </div>

        {/* Repeat this for inputs 2-5 */}
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
  );
}

export default App;