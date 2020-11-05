import React, { useState } from 'react';
import { addCommand } from '../../../services/botConnect';

const AddCommands = () => {
  const [commandValue, setCommandValue] = useState('');
  const [replyValue, setReplyValue] = useState('');

  const handleCommand = e => {
    if (e.currentTarget.value) setCommandValue(e.currentTarget.value);
  };

  const handleReply = e => {
    if (e.currentTarget.value) setReplyValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (commandValue && replyValue) {
      addCommand(commandValue, replyValue);
      window.location.reload(false);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <p>
          Add New Command
        </p>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                onChange={e => handleCommand(e)}
                className="form-control"
                placeholder="Command..."
                value={commandValue} />
            </div>
            <div className="col">
              <input
                type="text"
                onChange={e => handleReply(e)}
                className="form-control"
                value={replyValue}
                placeholder="Reply..." />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block mt-2"
            onClick={e => handleSubmit(e)}>
            Add Command
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCommands;
