import React, { useState } from 'react';
import { sendBroadcast } from '../../../../services/botConnect';

const SendBroadcast = () => {
  const [bc, setBc] = useState('');

  const bcHandler = e => {
    if (e.currentTarget.value) setBc(e.currentTarget.value);
  };

  const handleBcSubmit = e => {
    e.preventDefault();
    setBc('');
    sendBroadcast(bc);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Send Broadcast</h5>
        <form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" value={bc} onChange={e => bcHandler(e)} placeholder="Message..." />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={e => handleBcSubmit(e)}>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendBroadcast;
