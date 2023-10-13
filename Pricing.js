import React from 'react';

const Pricing = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Basic
            </div>
            <div className="card-body">
              <h5 className="card-title">$10/month</h5>
              <p className="card-text">Some description here.</p>
              <a href="#" className="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Pro
            </div>
            <div className="card-body">
              <h5 className="card-title">$20/month</h5>
              <p className="card-text">Some description here.</p>
              <a href="#" className="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Premium
            </div>
            <div className="card-body">
              <h5 className="card-title">$30/month</h5>
              <p className="card-text">Some description here.</p>
              <a href="#" className="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;