import React, { useState, useEffect } from 'react';
import CommandTable from './panel/CommandTable';
import fetchCommands from '../../services/botConnect';

const Panel = () => {
  const [commands, setCommands] = useState([]);

  const getCommands = async () => {
    const data = await fetchCommands();
    if (data) return setCommands(data);
    return setCommands([]);
  };

  useEffect(() => {
    getCommands();
  }, []);

  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Commands</h1>
        <div className="card mb-4">
          <div className="card-body">
            <p>
              Chat commands
            </p>
            <CommandTable commands={commands} />
            <button type="button" className="btn btn-success float-right">
              Add commands
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Panel;
