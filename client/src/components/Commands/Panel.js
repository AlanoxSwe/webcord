import React, { useState, useEffect } from 'react';
import CommandTable from '../common/CommandTable';
import { fetchCommands, fetchSpecialCommands } from '../../services/botConnect';
import AddCommands from './panel/AddCommands';
import SpecialCommandTable from '../common/SpecialCommandTable';

const Panel = () => {
  const [commands, setCommands] = useState([]);
  const [specialCommands, setSpecialCommands] = useState([]);

  const getCommands = async () => {
    const data = await fetchCommands();
    if (data) return setCommands(data);
    return setCommands([]);
  };

  const getSpecialCommands = async () => {
    const data = await fetchSpecialCommands();
    if (data) return setSpecialCommands(data);
    return setSpecialCommands([]);
  };

  useEffect(() => {
    getCommands();
    getSpecialCommands();
  }, []);

  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Commands</h1>
        <AddCommands />
        <div className="card mb-4">
          <div className="card-body">
            <p>
              Chat commands
            </p>
            <CommandTable commands={commands} />
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p>
              Special commands
            </p>
            <SpecialCommandTable commands={specialCommands} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Panel;
