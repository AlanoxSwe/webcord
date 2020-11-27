import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommandTable from '../common/CommandTable';
import { fetchCommands, fetchSettings } from '../../services/botConnect';
import CurrentSettings from './panel/CurrentSettings';
import QuickActions from './panel/QuickActions';

const Panel = () => {
  const [commands, setCommands] = useState([]);
  const [settings, setSettings] = useState({});

  const getCommands = async () => {
    const data = await fetchCommands();
    if (data) return setCommands(data);
    return setCommands([]);
  };

  const getSettings = async () => {
    const data = await fetchSettings();
    if (data) return setSettings(data);
    return setSettings([]);
  };

  useEffect(() => {
    getCommands();
    getSettings();
  }, []);

  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Dashboard</h1>
        <QuickActions />
        <CurrentSettings settings={settings} />
        <div className="card mb-4">
          <div className="card-body">
            <p>
              Chat commands
            </p>
            <CommandTable commands={commands} />
            <Link to="/commands" type="button" className="btn btn-success float-right">
              Add commands
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Panel;
