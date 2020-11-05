import React, { useState } from 'react';
import fetchCommands from '../../../services/botConnect';
// import axios from 'axios';

const OnlineStatus = () => {
  const [online, setOnline] = useState(false);

  const getOnlineStatus = async () => {
    if (await fetchCommands()) return setOnline(true);
    return setOnline(false);
  };

  getOnlineStatus();

  return (
    <div className="breadcrumb mb-4">
      <div className="card-body">
        <p className="mb-0">
          Webcord is currently
          {' '}
          <code className={online ? 'text-success' : 'text-danger'}>
            {online ? 'ONLINE' : 'OFFLINE'}
          </code>
        </p>
      </div>
    </div>
  );
};

export default OnlineStatus;
