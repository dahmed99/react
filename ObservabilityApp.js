// src/ObservabilityApp.js
import React, { useState } from 'react';

function ObservabilityApp() {
  const [sealId, setSealId] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [environment, setEnvironment] = useState('dev');
  const [metrics, setMetrics] = useState(false);
  const [traces, setTraces] = useState(false);
  const [logs, setLogs] = useState(false);
  const [profiling, setProfiling] = useState(false);
  const [dbm, setDbm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitSection1 = () => {
    setIsLoading(true);

    // Make a GET request to test.com/1 with 'sealId' as a query parameter
    fetch(`https://test.com/1?sealId=${sealId}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        // Handle the response data as needed
      })
      .catch((error) => {
        setIsLoading(false);
        // Handle errors
      });
  };

  const handleSubmitSection2 = () => {
    setIsLoading(true);

    // Construct the query parameters
    const queryParameters = `sealId=${sealId}&repoUrl=${repoUrl}&environment=${environment}&metrics=${metrics}&traces=${traces}&logs=${logs}&profiling=${profiling}&dbm=${dbm}`;

    // Make a GET request to test.com/2 with all the query parameters
    fetch(`https://test.com/2?${queryParameters}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        // Handle the response data as needed
      })
      .catch((error) => {
        setIsLoading(false);
        // Handle errors
      });
  };

  return (
    <div className="container mt-5">
      <h1>PTSRE Observability</h1>
      <div className="row mt-5">
        <div className="col">
          <h2>Validate Observability</h2>
          <div className="form-group">
            <label>SEAL ID</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={sealId}
                onChange={(e) => setSealId(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={() => alert("Change Me")}
                >
                  ?
                </button>
              </div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleSubmitSection1}>
            Submit
          </button>
        </div>
        <div className="col">
          <h2>Configure Observability</h2>
          <div className="form-group">
            <label>SEAL ID</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={sealId}
                onChange={(e) => setSealId(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={() => alert("Change Me")}
                >
                  ?
                </button>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>REPO URL(s)</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={() => alert("Change Me")}
                >
                  ?
                </button>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Environment</label>
            {/* ... Rest of the code ... */}
          </div>
          <div className="form-group">
            <label>Datadog capabilities</label>
            {/* ... Rest of the code ... */}
          </div>
          <button className="btn btn-primary" onClick={handleSubmitSection2}>
            Submit
          </button>
        </div>
      </div>
      {isLoading && (
        <div className="mt-3">
          <p>In Progress</p>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ObservabilityApp;