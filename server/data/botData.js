const botDb = {
  settings: {
    prefix: '!',
    welcome: 'Welcome to the server,',
    lock: false,
  },
  commands: [
    {
      command: 'test',
      reply: 'works!',
      enabled: false,
    },
    {
      command: 'hello',
      reply: 'world!',
      enabled: true,
    },
  ],
  specialCommands: [
    {
      type: 'clear',
      command: 'clearchat',
      desc: 'Clears the chat',
      enabled: true,
    },
  ],
};

const addCommand = (obj) => {
  botDb.commands.push(obj);
};

const updateSettings = (obj) => {
  botDb.settings = obj;
};

module.exports = { addCommand, updateSettings, botDb };
