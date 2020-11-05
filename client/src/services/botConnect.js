import axios from 'axios';

const fetchCommands = async () => {
  try {
    const { data } = await axios.get('http://localhost:3001/commands');
    return data;
  } catch (err) {
    return null;
  }
};

export default fetchCommands;
