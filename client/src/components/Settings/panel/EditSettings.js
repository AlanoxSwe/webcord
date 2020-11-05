import React, { useState, useEffect } from 'react';
import { changeSetting } from '../../../services/botConnect';

const EditSettings = ({ settings }) => {
  const [welcome, setWelcome] = useState(`${settings.welcome} %user%`);
  const [prefix, setPrefix] = useState(settings.prefix);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    setWelcome(settings.welcome);
    setPrefix(settings.prefix);
  }, [settings.welcome, settings.prefix]);

  const handleWelcome = e => {
    if (e.currentTarget.value) setWelcome(e.currentTarget.value);
  };

  const handleWelcomeSubmit = e => {
    e.preventDefault();
    changeSetting({ welcome });
  };

  const handlePrefix = e => {
    if (e.currentTarget.value) setPrefix(e.currentTarget.value);
  };

  const handlePrefixSubmit = e => {
    e.preventDefault();
    changeSetting({ prefix });
  };

  const lockServer = bool => {
    setLock(bool);
  };

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <p>
            Welcome Message
          </p>
          <form>
            <input type="text" className="form-control" value={welcome} onChange={e => handleWelcome(e)} />
            <button type="button" className="btn btn-primary btn-block mt-2" onClick={e => handleWelcomeSubmit(e)}>Save</button>
          </form>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Command Prefix</h5>
                  <select className="custom-select" value={prefix} onChange={e => handlePrefix(e)}>
                    <option value="!">!</option>
                    <option value=".">.</option>
                    <option value="/">/</option>
                    <option value="?">?</option>
                    <option value="">None</option>
                  </select>
                  <button type="button" className="btn btn-success mt-2 btn-block" onClick={e => handlePrefixSubmit(e)}>Save</button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Server Lock</h5>
                  {!lock
                    ? <button type="button" className="btn btn-danger btn-block" onClick={() => lockServer(!lock)}>Lock</button>
                    : <button type="button" className="btn btn-success btn-block" onClick={() => lockServer(!lock)}>Open</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSettings;
