import React from 'react';

const QuickActions = () => (
  <div className="card mb-4">
    <div className="card-body">
      <p>
        Quick Actions
      </p>
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Send Broadcast</h5>
              <form>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Message..." />
                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Send Alert</h5>
              <form>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Message..." />
                  <div className="input-group-append">
                    <button className="btn btn-danger" type="button">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Create Poll</h5>
              <form>
                <input type="text" className="form-control" placeholder="Question..." />
                <div className="input-group my-3">
                  <input type="text" className="form-control" placeholder="Option 1..." />
                  <input type="text" className="form-control" placeholder="Option 2..." />
                </div>
              </form>
              <button type="button" className="btn btn-secondary float-right">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuickActions;
