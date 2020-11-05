import axios from 'axios';

export const fetchCommands = async () => {
  try {
    const { data } = await axios.get('http://localhost:3001/commands');
    return data;
  } catch (err) {
    return null;
  }
};

export const fetchSettings = async () => {
  try {
    const { data } = await axios.get('http://localhost:3001/settings');
    return data;
  } catch (err) {
    return null;
  }
};

export const changeSetting = async obj => {
  try {
    const { data } = await axios.put('http://localhost:3001/settings', obj);
    return data;
  } catch (err) {
    return null;
  }
};

export const sendBroadcast = async message => {
  try {
    const { data } = await axios.post('http://localhost:3001/broadcast', {
      message,
    });
    return data;
  } catch (err) {
    return null;
  }
};

export const sendAlert = async (title, message) => {
  try {
    const { data } = await axios.post('http://localhost:3001/alert', {
      title,
      message,
    });
    return data;
  } catch (err) {
    return null;
  }
};

export const sendPoll = async (question, option1, option2) => {
  try {
    const { data } = await axios.post('http://localhost:3001/poll', {
      question,
      option1,
      option2,
    });
    return data;
  } catch (err) {
    return null;
  }
};

export const addCommand = async (command, reply) => {
  try {
    const { data } = await axios.post('http://localhost:3001/commands', {
      command,
      reply,
      enabled: true,
    });
    return data;
  } catch (err) {
    return null;
  }
};
