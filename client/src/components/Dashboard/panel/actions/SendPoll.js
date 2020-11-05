import React, { useState } from 'react';
import { sendPoll } from '../../../../services/botConnect';

const SendPoll = () => {
  const [question, setQuestion] = useState('');
  const [op1, setOp1] = useState('');
  const [op2, setOp2] = useState('');

  const questionHandler = e => {
    if (e.currentTarget.value) setQuestion(e.currentTarget.value);
  };

  const op1Handler = e => {
    if (e.currentTarget.value) setOp1(e.currentTarget.value);
  };

  const op2Handler = e => {
    if (e.currentTarget.value) setOp2(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuestion('');
    setOp1('');
    setOp2('');
    sendPoll(question, op1, op2);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Create Poll</h5>
        <form>
          <input type="text" className="form-control" value={question} onChange={e => questionHandler(e)} placeholder="Question..." />
          <div className="input-group my-3">
            <input type="text" className="form-control" value={op1} onChange={e => op1Handler(e)} placeholder="Option 1..." />
            <input type="text" className="form-control" value={op2} onChange={e => op2Handler(e)} placeholder="Option 2..." />
          </div>
        </form>
        <button type="button" className="btn btn-secondary float-right" onClick={e => handleSubmit(e)}>Send</button>
      </div>
    </div>
  );
};

export default SendPoll;
