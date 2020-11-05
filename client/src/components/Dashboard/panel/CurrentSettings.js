import React from 'react';
import { Link } from 'react-router-dom';

const CurrentSettings = ({ settings }) => (
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
                    {settings.welcome}
                    {' '}
                    %user%!
                  </code>
                </p>
              </p>
              <Link to="/settings" className="card-link float-right">Configure</Link>
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
                    {settings.prefix}
                    {'{command}'}
                  </code>
                </p>
              </p>
              <Link to="/settings" className="card-link float-right">Configure</Link>
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
                    {!settings.lock ? 'Open to all' : 'Locked'}
                  </code>
                </p>
              </p>
              <Link to="/settings" className="card-link float-right">Configure</Link>
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
              <a href="http://discord.com" className="card-link float-right">Configure in Discord</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CurrentSettings;
