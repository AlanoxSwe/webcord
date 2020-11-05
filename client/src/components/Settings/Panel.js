import React, { useState, useEffect } from 'react';
import EditSettings from './panel/EditSettings';
import { fetchSettings } from '../../services/botConnect';

const Panel = () => {
  const [settings, setSettings] = useState({});

  const getSettings = async () => {
    const data = await fetchSettings();
    if (data) return setSettings(data);
    return setSettings([]);
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Settings</h1>
        <EditSettings settings={settings} />
      </div>
    </main>
  );
};

export default Panel;
