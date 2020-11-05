const botDb = {
  settings: {
    prefix: '!',
  },
  commands: [
    {
      command: 'test',
      reply: 'works!',
      enabled: true,
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

module.exports = { addCommand, botDb };
