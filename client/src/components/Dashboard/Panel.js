import React, { useState, useEffect } from 'react';
import OnlineStatus from './panel/OnlineStatus';
import CommandTable from './panel/CommandTable';
import fetchCommands from '../../services/botConnect';
import CurrentSettings from './panel/CurrentSettings';
import QuickActions from './panel/QuickActions';

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
        <h1 className="mt-4">Dashboard</h1>
        <OnlineStatus />
        <QuickActions />
        <CurrentSettings />
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
