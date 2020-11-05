import React, { useState } from 'react';
import { sendAlert } from '../../../../services/botConnect';

const SendAlert = () => {
  const [title, setTitle] = useState('');
  const [msg, setMsg] = useState('');

  const titleHandler = e => {
    if (e.currentTarget.value) setTitle(e.currentTarget.value);
  };

  const msgHandler = e => {
    if (e.currentTarget.value) setMsg(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTitle('');
    setMsg('');
    sendAlert(title, msg);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Send Alert</h5>
        <form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" value={title} onChange={e => titleHandler(e)} placeholder="Title..." />
            <input type="text" className="form-control" value={msg} onChange={e => msgHandler(e)} placeholder="Message..." />
            <div className="input-group-append">
              <button className="btn btn-danger" type="button" onClick={e => handleSubmit(e)}>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendAlert;
