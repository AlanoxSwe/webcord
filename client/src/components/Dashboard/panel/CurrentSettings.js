import React from 'react';

const CurrentSettings = () => (
  <div className="card mb-4">
    <div className="card-body">
      <p>
        Current settings
      </p>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome Message</h5>
              <p className="card-text text-muted">
                When a new user joins, the bot will say:
                <p>
                  <code>
                    Welcome %user%!
                  </code>
                </p>
              </p>
              <a href="/" className="card-link float-right">Configure</a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Command Prefix</h5>
              <p className="card-text text-muted">
                Commands will only be executed with the set prefix:
                <p>
                  <code>
                    !
                    {'{command}'}
                  </code>
                </p>
              </p>
              <a href="/" className="card-link float-right">Configure</a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Server Lock</h5>
              <p className="card-text text-muted">
                Your server lock status is currently:
                <p>
                  <code>
                    Open to all
                  </code>
                </p>
              </p>
              <a href="/" className="card-link float-right">Configure</a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Permissions</h5>
              <p className="card-text text-muted">
                Webcord currently has the rank:
                <p>
                  <code>
                    Administrator
                  </code>
                </p>
              </p>
              <a href="/" className="card-link float-right">Configure</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CurrentSettings;
