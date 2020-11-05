import React, { useState, useEffect } from 'react';
import { fetchCommands } from '../../services/botConnect';
// import axios from 'axios';

const OnlineStatus = () => {
  const [online, setOnline] = useState(false);

  const getOnlineStatus = async () => {
    if (await fetchCommands()) return setOnline(true);
    return setOnline(false);
  };

  useEffect(() => {
    getOnlineStatus();
  }, []);

  return (
    <>
      <code className={online ? 'text-success' : 'text-danger'}>
        {online ? 'ONLINE' : 'OFFLINE'}
      </code>
    </>
  );
};

export default OnlineStatus;
